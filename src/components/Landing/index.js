/* import {BsArrowLeftRight} from "react-icons/bs" */
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    letter-spacing: 1.5px;
    margin-top: 20px;
    color: #571d85;
    text-align: center
  }
`;

const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  opacity: 0.9;
  padding: 50px;
  background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));
  /* background-color: #613685; */
 

  input {
    padding: 10px 0px 10px 0px;
    border: none;
    border-radius: 2%;
    font-size: 25px;
    text-align: center;
    margin-bottom: 25px;

    &:focus {
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 3px solid #571d85;
    }
  }

  h2 {
    color: white;
    margin: 10px;
  }

  select {
   background: rgb(59, 26, 87); 
    display: flex;
    flex-wrap: nowrap;
    color: white;
    padding: 20px;
    border-radius: 2%;
    margin: 5px 15px;
    outline: none;
    border: none;
    box-shadow: 1px 3px 5px rgb(96, 57, 128);
  }


  .btn {
    width: 60%;
    letter-spacing:1.5px;
    color: #ffffff;
    border: none;
    box-shadow: 1px 3px 5px rgb(96, 57, 128);
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    background: rgb(59, 26, 87);
    margin-top: 20px;

     &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .btn:focus {
    outline: none;
  }
`

const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  button  {
    border: none;
    background-color: transparent;
    color: white;

    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`
const CurrencyContainer= styled.div`
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));
width: 100%;
`;

const ConvertContainer = styled.div`
display: flex;
width: 100%;
justify-content: center; 
align-items: center;
background-color: white;
min-height: 300px;

h3 {
  color: black;
  text-align: center;
  margin-top: 40px;
  font-size: 40px;
}
`;

const GraphContainer = styled.div`
height: 300px;
width: 100%;
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));

h1 {
  color: white;
}
`;

const Landing = () => {
  const API_URL =
    'https://v6.exchangerate-api.com/v6/bd393756f95d150b66b63a5e/latest/SEK'

  const [rates, setRates] = useState([])
  const [convertNr, setConvertNr] = useState(1)
  const [convertCur, setConvertCur] = useState(1)
  const [select1, setSelect1] = useState('SEK')
  const [currencyCode, setCurrencyCode] = useState('USD') // ex. USD, EUR
  const [total, setTotal] = useState() 
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

  useEffect(()=>{
  
  }
  ,[total])



  const handleSelect1 = (e) => {
    setSelect1(e.target.value)
  }

  const handleSelect2 = (e) => {
    setCurrencyCode(e.target.value)

  }

  const handleChange = (e) => {
    setConvertNr(e.target.value);  
  }

  const handleConvert = () => {
    setTotal(convertNr * rates[currencyCode])
  }

  function handleShift() {
    setCurrencyToggle(!currencyToggle)
    if(currencyToggle){
         setTotal(convertNr * rates[currencyCode])
        
       }else {
        setTotal(convertNr / rates[currencyCode])
       }
  }
 
  
  const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  return (
    <StyledBody>
      <h1>Dashboard</h1>

<CurrencyContainer>
      <StyledCont>
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
          <select onChange={handleSelect1} value={select1} id='countries' name='currency'>
            {!rates ? (
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
        </FlexBoxContainer>
     
        <button className='btn' onClick={handleConvert}>convert</button>
      </StyledCont>
  </CurrencyContainer>

<ConvertContainer> 
<h3>
        {
        !currencyToggle?
           `${convertNr} ${select1} = ${Math.round(total * 100) / 100} ${currencyCode}`
            : `${convertNr} ${currencyCode} = ${Math.round(total * 100) / 100} ${select1}`
        }
</h3>
        
</ConvertContainer>

<GraphContainer>

  <h1>(Graf över valuta här) </h1>
</GraphContainer>
  

    </StyledBody>
  )
}

export default Landing
