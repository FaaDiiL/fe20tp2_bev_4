import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
/* import {BsArrowLeftRight} from "react-icons/bs" */
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';


const StyledBody = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh;
     width: 100%;
     background: #f8f9fa;
     background: linear-gradient(70deg, #fae1dd 30%,  #fcd5ce 80% );
     border-radius: 5%;
`

const StyledCont = styled.div`
     display: flex; 
     justify-content: center;
     align-items:center;
     flex-wrap: wrap;
     width: 60%;
     height: 450px;
     /* background: #f8f9fa; */
     background: linear-gradient(70deg, #f8f9fa 20%, #fae1dd 40%,  #fcd5ce 95% );
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

     select:focus{
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
     button:focus{
          outline:none;
     }
     `

     

const Landing  = () => {

     const API_URL = 'https://v6.exchangerate-api.com/v6/bd393756f95d150b66b63a5e/latest/'
     const BASE_CUR = 'SEK'
  
     
     const [rates, setRates] = useState([])
     const [convertNr, setConvertNr] = useState('')
     const [convertCur, setConvertCur] = useState('')
     const [click, setClick] = useState('')
     /* const [pickedCur, setPickedCur] = useState('SEK') */
 
    useEffect(() => {
         fetch(`${API_URL}${BASE_CUR}`)
         .then(response => response.json())
         .then(data => setRates(data.conversion_rates))
    },[])

    const handleSelect1 = (e) => {

     console.log(e.target.value)  
     fetch(`${API_URL}${e.target.value}`)
     .then(response => response.json())
     .then(data => setRates(data.conversion_rates))
    }
    
    const handleSelect2 = (e) => {
     console.log(e.target.value)  
    }

    const handleChange = (e) => {              

     if (e.target.name === 'number'){
       setConvertNr(e.target.value)
  } 
          // console.log(e.target.name.value === 'currency')
          //  setConvertCur(e.target.name.value)
          // setConvertNr(e.target.value)
          
     }

const handleConvert = () => {
     setClick(`${convertNr} ${convertCur}`)
}

     
     return (
          <StyledBody>
               <StyledCont>
                    <input onChange={handleChange} type='number' name='number'/>
                    <select onChange={handleSelect1} id="countries" name='currency'>
                    {
          !!rates ?
          Object.entries(rates).map(([curr, vall],i)  => (
            <option key={i} value={`${curr}`} >{curr}</option>
            
          )    
          ):<option value="GBP">GBP</option>
        }
                    
               </select>
               
               <CompareArrowsIcon />
          <select onChange={handleSelect2} className='selectContainer' id="countries">
          {
          !!rates ?
          Object.entries(rates).map(([curr, vall],i)  => (
            <option key={i} value={`${curr}`} >{curr}</option>
            
          )    
          ):<option value="USD">USD</option>
        }
          </select>
          <button onClick={handleConvert}>convert</button>
          </StyledCont>
          <h3>{click}</h3>
     </StyledBody>
    
     )
}

export default Landing
