import React,{ useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

import { withAuthorization } from "../Session";
import Chart from "./dashboard";

const StyledDashBody = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin: 0 auto;
  margin-top: 100px;
`;
const StyledDash = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;

  .donutWrapper {
    width: 100%;
  }
`;

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
    border-bottom: 3px solid #571d85;
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
`;

const HomePage = () => {
  // //random color generator ------->
  // let COLORS = [];
  // while (COLORS.length < 100) {
  //   COLORS.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
  // }

  // // random number generator
  // function rand(frm, to) {
  //   return ~~(Math.random() * (to - frm)) + frm;
  // }
  // //------------->
  const [base, setBase]= useState()
  const [curCode, setCurCode]= useState()
  const [doughnut, setDoughnut] = useState([{labels: 'USD', amount: 500 },{labels: 'EUR', amount: 250 }])
  const [totalAmount, setTotalAmount] = useState(0)

  const myLabels = doughnut.map((cur)=> cur.labels)
  const myAmount = doughnut.map((cur)=> cur.amount)
  
  useEffect(()=>{
    const newTotalAmount = doughnut.map((cur) => cur.amount)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let fullTotal = newTotalAmount.reduce(reducer)
    setTotalAmount(fullTotal)
  },[])

  function addNewCurrency(e){
    e.preventDefault()
    let labels = e.target[0].value.toUpperCase()
    let amount = parseInt(e.target[1].value)
    setDoughnut([...doughnut, {labels,  amount }])
  }

  const data = {
    labels: myLabels,
    datasets: [
      {
        data: myAmount,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        // hoverBackgroundColor: ["#b9faf8", "#a663cc", "#cdc1ff"],
      },
    ],
  };
  console.log(data)

  return (
    <StyledDashBody>
      <StyledTable>
        <form onSubmit={addNewCurrency}>
          <input type="text" name="currencyCode" placeholder="Currency" />
          <input type="number" name="amount" placeholder="Amount" />
          <button>Add</button>
        </form>
        {/* <h4>savings</h4> */}
        <ul>
          <li>
            <span className="first">Savings</span>
            <span className="first" style={{ textAlign: "right" }}> Total: { totalAmount} </span>
          </li>
          {
            doughnut.map((cur,index) =>(
              <li key={index}>
                <span className="first"> {`${cur.labels} ${cur.amount}`}</span>
                <span>31020kr</span>
                <span className="up">12%</span>
              </li>
            ))
          
          }
        </ul>
      </StyledTable>
      <StyledDash>
        <div className="donutWrapper">
          <Doughnut
            data={data}
            width={200}
            height={150}
            options={{
              title: {
                display: true,
                text: "My Savings",
                fontSize: 14,
              },
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        </div>
        setBase
        setCurCode
        <h3>Analyze from which currency?</h3>
        <button style={{background: 'green'}} onClick={(e)=>setBase(e.target.innerText)}>EUR</button>
        <button style={{background: 'green'}} onClick={(e)=>setBase(e.target.innerText)}>USD</button>
        <button style={{background: 'green'}} onClick={(e)=>setBase(e.target.innerText)}>SEK</button>
        <br/>
        <br/>
        <br/>
        <h3>Analyze to which currency?</h3>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>GBP</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>CAD</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>AUD</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>AED</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>TRY</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>CLP</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>RUB</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>JPY</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>JPY</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>CZK</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>NOK</button>
        <button style={{background: 'blue'}} onClick={(e)=>setCurCode(e.target.innerText)}>DKK</button>
        <Chart  curCode={curCode} base={base} />
        
      </StyledDash>
    </StyledDashBody>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
