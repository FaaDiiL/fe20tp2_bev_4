// import { useContext, useEffect, useState } from '@testing-library/dom'
import React, { useState, useEffect, useContext } from 'react'
import { Doughnut } from 'react-chartjs-2'

import Chat from '../Chat'
import { withFirebase } from '../Firebase'
import { AuthUserContext, withAuthorization } from '../Session'
import Chart from './dashboard'
import Form from './form'
import { StyledDash, StyledDashBody, StyledTable } from './styles.js'
import Table from './table'

const HomePage = ({ firebase }) => {
  const authUser = useContext(AuthUserContext)
  const [firebaseData, setFirebaseData] = useState([])
  const [doughnut, setDoughnut] = useState(
    JSON.parse(localStorage.getItem('authUser')).savings
      ? JSON.parse(localStorage.getItem('authUser')).savings
      : [
          {
            labels: 'USD',
            amount: 500,
            ratesOnDate: 0.8532,
            baseTotal: 4700,
            date: '2021-01-03',
            currPerfomancePercentage: '15',
            currPerfomanceAmount: '142',
          },
        ]
  )

  const [totalAmount, setTotalAmount] = useState([])

  useEffect(() => {
    if (authUser) {
      firebase
        .user(authUser.uid)
        .child('savings')
        .on('value', (snapshot) => {
          const savingsObject = snapshot.val()
          if (savingsObject) {
            // om ID? se admin :) /K
            setFirebaseData(savingsObject)
          }
        })
    }
  }, [firebase, authUser])

  const editSavings = (dataObj) => {
    firebase.user(authUser.uid).child('savings').update(dataObj)
  }
  const myLabels = firebaseData.map((cur) => cur.labels)
  const myAmount = firebaseData.map((cur) => cur.amount)
  const data = {
    labels: myLabels,
    datasets: [
      {
        data: [...myAmount],
        backgroundColor: [
          '#003f5c',
          '#2f4b7c',
          '#665191',
          '#a05195',
          '#d45087',
          '#f95d6a',
          '#ff7c43',
          '#ffa600',
          '#003f5c',
          '#2f4b7c',
          '#665191',
          '#a05195',
          '#d45087',
          '#f95d6a',
          '#ff7c43',
          '#ffa600',
          '#003f5c',
          '#2f4b7c',
          '#665191',
          '#a05195',
          '#d45087',
          '#f95d6a',
          '#ff7c43',
          '#ffa600',
        ],
      },
    ],
  }
  return firebaseData.length > 0 ? (
    <StyledDashBody>
      <StyledTable>
      <p>Here is the place you can keep track of all your savings in all different currencies"</p>
      <p>Press the button to start</p>
      <br />
      <br />
      <br />
      <br />
        <Form setDoughnut={editSavings} doughnut={firebaseData} />

        <Table
          doughnut={firebaseData}
          setDoughnut={editSavings}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          firebase={firebase}
        />
      </StyledTable>

      <StyledDash>
        <div className='donutWrapper'>
          <Doughnut
            data={data}
            width={100}
            height={50}
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

        <Chart />
        <Chat />
      </StyledDash>
    </StyledDashBody>
  ) : (
    <StyledDashBody>
      <StyledTable>
        {/* <button onClick={updateSavings}>Update</button> */}
        <Form setDoughnut={editSavings} doughnut={firebaseData} />
      </StyledTable>
    </StyledDashBody>
  )
}

const condition = (authUser) => !!authUser

export default withAuthorization(condition)(withFirebase(HomePage))
