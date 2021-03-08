/* import {BsArrowLeftRight} from "react-icons/bs" */
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #f8f9fa;
  background: linear-gradient(70deg, #fae1dd 30%, #fcd5ce 80%);
  border-radius: 5%;
`

const StyledCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  height: 450px;
  /* background: #f8f9fa; */
  background: linear-gradient(70deg, #f8f9fa 20%, #fae1dd 40%, #fcd5ce 95%);
  opacity: 0.9;
  border-radius: 5%;

  input {
    width: 85%;
    padding: 30px;
    border: 3px solid #f8f9fa;
    margin: 10px 10px;
    border-radius: 2%;
    font-size: 25px;
    text-align: center;
  }

  input:focus {
    outline: none;
  }

  select {
    display: flex;
    flex-wrap: nowrap;
    width: 40%;
    padding: 30px;
    border: 3px solid #f8f9fa;
    border-radius: 2%;
    margin: 5px 15px;
    background-color: white;
  }

  select:focus {
    outline: none;
  }

  button {
    width: 90%;
    border: 3px solid #f8f9fa;
    padding: 30px;
    font-weight: bold;
    font-size: 20px;
    background-color: white;
    text-transform: uppercase;
    color: #000000;
    border-radius: 2%;
  }
  button:focus {
    outline: none;
  }
`

const Landing = () => {
  const API_URL =
    'https://v6.exchangerate-api.com/v6/bd393756f95d150b66b63a5e/latest/SEK'

  const [rates, setRates] = useState([])
  const [convertNr, setConvertNr] = useState(1)
  const [convertCur, setConvertCur] = useState('')
  const [select1, setSelect1] = useState('SEK')
  const [currencyCode, setCurrencyCode] = useState('USD') // ex. USD, EUR
  const [currencyToggle, setCurrencyToggle] = useState(false)

  useEffect(() => {
    const newDate = new Date().toISOString().split('T')[0] // format the time like: 2021-03-08
    if (localStorage.getItem(newDate)) {
      setRates(JSON.parse(localStorage.getItem(newDate)))
    } else {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(
            `${newDate}`,
            JSON.stringify(data.conversion_rates)
          )
          setRates(data.conversion_rates)
        })
    }
  }, [])

  const handleSelect1 = (e) => {
    setSelect1(e.target.value)
  }

  const handleSelect2 = (e) => {
    setCurrencyCode(e.target.value)
  }

  const handleChange = (e) => {
    if (e.target.name === 'number') {
      setConvertNr(e.target.value)
    }
  }

  const handleConvert = () => {
    console.log(convertCur)

    setConvertCur(`${rates[`${currencyCode}`] * convertNr}`)
  }

  function handleShift() {
    setCurrencyToggle(!currencyToggle)
    setConvertCur(
      `${
        !currencyToggle
          ? rates[`${currencyCode}`] * convertNr
          : convertNr / rates[`${currencyCode}`]
      }`
    )
  }

  return (
    <StyledBody>
      <StyledCont>
        <input
          onChange={handleChange}
          type='number'
          name='number'
          placeholder={`${convertNr} Kr`}
        />
        <select onChange={handleSelect1} id='countries' name='currency'>
          {!!rates ? (
            Object.entries(rates).map(([curr, vall]) => (
              <option key={curr} value={`${curr}`} name={`${curr} ${vall}`}>
                {curr}
              </option>
            ))
          ) : (
            <option value={select1}>{select1}</option>
          )}
        </select>

        <button onClick={handleShift}>
          <CompareArrowsIcon />
        </button>
        <select
          onChange={handleSelect2}
          className='selectContainer'
          id='countries'
          value={currencyCode}
        >
          {!!rates ? (
            Object.entries(rates).map(([curr, vall]) => (
              <option key={curr} value={`${curr}`}>
                {curr}
              </option>
            ))
          ) : (
            <option value={currencyCode}>{currencyCode}</option>
          )}
        </select>
        <button onClick={handleConvert}>convert</button>
      </StyledCont>
      <h3>{convertCur}</h3>
    </StyledBody>
  )
}

export default Landing
