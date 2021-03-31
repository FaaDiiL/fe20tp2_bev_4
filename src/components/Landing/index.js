import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import React, { useEffect, useState } from 'react'

import Chart from './Chart'
import { ConvertContainer, CurrencyContainer, FlexBoxContainer, StyledBody, StyledCont } from './style'

const Landing = () => {
  const API_URL =
    'https://v6.exchangerate-api.com/v6/bd393756f95d150b66b63a5e/latest/SEK'

  const [rates, setRates] = useState([])
  const [convertNr, setConvertNr] = useState(1)
  const [select1, setSelect1] = useState('SEK')
  const [currencyCode, setCurrencyCode] = useState('USD') // ex. USD, EUR
  const [total, setTotal] = useState(null)
  const [currencyToggle, setCurrencyToggle] = useState(false)

  const saveFetchedApiLS =  () =>{
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
  }

  useEffect(() => {
    saveFetchedApiLS()
  }, [])

  const handleSelect1 = (e) => {
    setSelect1(e.target.value)
  }

  const handleSelect2 = (e) => {
    setCurrencyCode(e.target.value)
  }

  const handleChange = (e) => {
    setConvertNr(e.target.value)
  }

  const handleConvert = (e) => {
    e.preventDefault()
    setTotal(convertNr * rates[currencyCode])
  }

  // const lager = ''

  function handleShift(e) {
    e.preventDefault()

    setCurrencyToggle(!currencyToggle)
    if (currencyToggle) {
      setCurrencyCode(select1)
      setSelect1(currencyCode)

      setTotal(convertNr * rates[select1])
    } else {
      setSelect1(currencyCode)
      setCurrencyCode(select1)

      setTotal(convertNr / rates[currencyCode])
    }
  }

  const blockInvalidChar = (e) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
  return (
    <StyledBody>
      <CurrencyContainer>
        <StyledCont>
        <br /><br />
          <h2>Currency Converter</h2>
          <input
            type='number'
            name='number'
            min='1'
            step='1'
            placeholder={`${convertNr} Kr`}
            onKeyDown={blockInvalidChar}
            onChange={handleChange}
          />
          <FlexBoxContainer>
            <select
              onChange={handleSelect1}
              value={select1}
              id='countries'
              name='currency'
            >
              {!rates ? (
                Object.entries(rates).map(([curr, vall]) => (
                  <option key={curr} name={`${curr} ${vall}`}>
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
              name='selectContainer'
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
          </FlexBoxContainer>

          <button className='btn' onClick={handleConvert}>
            convert
          </button>
        </StyledCont>
      </CurrencyContainer>

      <ConvertContainer>
        {total && (
          <p>
            {!currencyToggle
              ? `${convertNr} ${select1} = 
                ${Math.round(total * 100) / 100} ${currencyCode}`
              : `${convertNr} ${select1} = ${
                  Math.round(total * 100) / 100
                } ${currencyCode}`}
          </p>
        )}
      </ConvertContainer>

      <Chart />
    </StyledBody>
  )
}

export default Landing
