import { Grid } from '@material-ui/core'
import { flexbox } from '@material-ui/system'
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'

import { withAuthorization } from '../Session'
import Chart from './dashboard'

const StyledDashBody = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin: 0 auto;
  margin-top: 100px;
`
const StyledDash = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;

  .donutWrapper {
    width: 30vw;
  }
`

const StyledTable = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 8px;
    border: none;
    outline: none;
    display: flex;
    margin-bottom: 15px;
  }

  ul {
    width: 100%;
    list-style: none;
    align-self: flex-start;
    text-align: left;
    margin: 40px 0px 40px 0px;
  }

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 5px;
    border-bottom: 1px solid #d4d0dc;
  }
  span {
    width: 25%;
  }

  .first {
    width: 50%;
  }
  .up {
    color: limegreen;
    text-align: right;
  }
  .down {
    color: red;
    text-align: right;
  }
`

const HomePage = () => {
  const [base, setBase] = useState()
  const [curCode, setCurCode] = useState()
  const [doughnut, setDoughnut] = useState([
    { labels: 'USD', amount: 500, ratesOnDate: 0.8532, date: '2020-01-03' },
    { labels: 'EUR', amount: 250, ratesOnDate: 0.8532, date: '2020-04-03' },
  ])
  const [totalAmount, setTotalAmount] = useState(0)

  const myLabels = doughnut.map((cur) => cur.labels)
  const myAmount = doughnut.map((cur) => cur.amount)

  useEffect(() => {
    const newTotalAmount = doughnut.map((cur) => cur.amount)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let fullTotal = newTotalAmount.reduce(reducer)
    setTotalAmount(fullTotal)
  }, [doughnut])

  function addNewCurrency(e) {
    e.preventDefault()
    let labels = e.target[0].value.toUpperCase()
    let amount = parseInt(e.target[1].value)
    let date = e.target[2].value
    
    

    console.log(labels)
    console.log(amount)
    console.log(date)

    fetch(
      `https://api.exchangerate.host/timeseries?symbols=${labels}&start_date=${date}&end_date=${date}&base=EUR`
    )
      .then((res) => res.json())
      .then((data) => {
        let responseDateRate = data.rates[date][labels]
        setDoughnut([...doughnut, { labels, amount, date, responseDateRate }])
      })
  }

  const data = {
    labels: myLabels,
    datasets: [
      {
        data: myAmount,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        // hoverBackgroundColor: ["#b9faf8", "#a663cc", "#cdc1ff"],
      },
    ],
  }
  console.log(data)

  return (
    <Grid container spacing={2}>
      <StyledDashBody>
        <StyledTable md={12}>
          <form onSubmit={addNewCurrency} className='dashboard-form' >
            {' '}
            {/* Form for savings in different currencies */}
            <input type='text' name='currencyCode' placeholder='Currency' />
            <input type='number' name='amount' placeholder='Amount' />
            <input type='date' name='date' />
            <button className='dashboard-add-btn'>Add</button>
          </form>
          <ul>
            <li>
              {' '}
              {/* Shows the savings in a list */}
              <span className='first'>Savings</span>
              <span className='first' style={{ textAlign: 'right' }}>
                {' '}
                Total: {totalAmount}{' '}
              </span>
            </li>
            {
              // This is the structure for every item in the list of savings
              doughnut.map((cur, index) => (
                <li key={index}>
                  <span className='first'>
                    {' '}
                    {`${cur.labels} ${cur.amount}`}
                  </span>
                  <span>31020kr</span>
                  <span className='up'>12%</span>
                </li>
              ))
            }
          </ul>
        </StyledTable>
        <StyledDash>
          <div className='donutWrapper'>
            {' '}
            {/* The Doughnut */}
            <Doughnut
              data={data}
              width={200}
              height={150}
              options={{
                title: {
                  display: true,
                  text: 'My Savings',
                  fontSize: 14,
                },
                legend: {
                  display: true,
                  position: 'top',
                },
              }}
            />
          </div>
          <h3>Analyze from which currency?</h3>
          <button
            style={{ background: 'green' }}
            onClick={(e) => setBase(e.target.innerText)}
          >
            EUR
          </button>
          <button
            style={{ background: 'green' }}
            onClick={(e) => setBase(e.target.innerText)}
          >
            USD
          </button>
          <button
            style={{ background: 'green' }}
            onClick={(e) => setBase(e.target.innerText)}
          >
            SEK
          </button>
          <br />
          <br />
          <br />
          <h3>Analyze to which currency?</h3>
          <button
            style={{ background: 'blue' }}
            onClick={(e) => setCurCode(e.target.innerText)}
          >
            GBP
          </button>
          <button
            style={{ background: 'blue' }}
            onClick={(e) => setCurCode(e.target.innerText)}
          >
            CAD
          </button>

          <Chart curCode={curCode} base={base} />
        </StyledDash>
      </StyledDashBody>
    </Grid>
  )
}

const condition = (authUser) => !!authUser

export default withAuthorization(condition)(HomePage)
