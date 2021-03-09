/* import {BsArrowLeftRight} from "react-icons/bs" */
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    /*  height: 100vh; */
     width: 100%;
     border-radius: 5%;
`

const StyledCont = styled.div`
     display: flex; 
     justify-content: center;
     align-items:center;
     flex-wrap: wrap;
     width: 60%;
     height: 450px;
     opacity: 0.9;
     border-radius: 5%;

     @media (max-width: 375px) {
          width: 80%;
             }


     input {
          box-shadow: 1px 3px 5px #571D85;
     padding: 25px;
     border: none;   
     border-radius: 2%;
     font-size: 25px;
     text-align: center;
     margin-bottom: -150px;

  &:focus{
     outline: none;
     border-top: none;
     border-left: none;
     border-right: none;
     border-bottom: 3px solid #571D85;
  }   
}
     select {
     display: flex;
    flex-wrap: nowrap;
 width: 40%; 
     padding: 25px;
     border: 3px solid #f8f9fa;
     border-radius: 2%;
     margin: 5px 15px;
     margin-bottom: -50px;
     background-color: white;
     box-shadow: 1px 3px 5px #571D85;

&:focus{
     outline: none;
     border-top: none;
     border-left: none;
     border-right: none;
     border-bottom: 3px solid #571D85;
}
}`

     const ButtonWrapper = styled.div`
     display: flex;
     flex-direction: column;

     button {
           border: none;
            box-shadow: 1px 3px 5px #571D85;
            padding: 30px;
            font-weight: bold;
            font-size: 20px;
            text-transform: uppercase;
       background-color: white;
            border-radius: 2%;
       
         
     &:hover{
       cursor: pointer;
       text-decoration: underline;
     }
       }
     
       button:focus{
            outline:none;
       }
     `;

const FlexBoxContainer = styled.div`
display: flex;
flex-direction: row;
`;

const Landing  = () => {

     const API_URL = 'https://v6.exchangerate-api.com/v6/bd393756f95d150b66b63a5e/latest/'
     const BASE_CUR = 'SEK'
     
     const [rates, setRates] = useState([])
     const [convertNr, setConvertNr] = useState(1)
     const [convertCur, setConvertCur] = useState('')
     const [select1, setSelect1] = useState('SEK')
     const [select2, setSelect2] = useState('')
 
    useEffect(() => {
         fetch(`${API_URL}${BASE_CUR}`)
         .then(response => response.json())
         .then(data => setRates(data.conversion_rates))
    },[])

    useEffect(() => {
          fetch(`${API_URL}${select1}`)
          .then(response => response.json())
          .then(data => setRates(data.conversion_rates))
          
     },[select1])

    const handleSelect1 = (e) => {
     setSelect1(e.target.value) 
    }
    
    const handleSelect2 = (e) => {
     setSelect2(e.target.value)  
    }

    const handleChange = (e) => {     
          if (e.target.name === 'number'){
          setConvertNr(e.target.value)
          }           
     }

const handleConvert = () => {
     setConvertCur(`${rates[`${select2}`] * convertNr}`)
}

     
     return (
          <StyledBody>
               <StyledCont>
                   
                    <input onChange={handleChange} placeholder={`${convertNr} kr`} type='number' name='number'/>
                    <FlexBoxContainer>
                    <select onChange={handleSelect1} id="countries" name='currency'>
                    {
          !!rates ?
          Object.entries(rates).map(([curr, vall])  => (
            <option key={curr} value={`${curr}`} name={`${curr} ${vall}`}>{curr}</option>
          )    
          ):<option value={"GBP"}>GBP</option>
        }
                    
               </select>
               
               <CompareArrowsIcon />
          <select onChange={handleSelect2} className='selectContainer' id="countries">
          {
          !!rates ?
          Object.entries(rates).map(([curr, vall])  => (
            <option key={curr} value={`${curr}`} >{curr}</option>
            
          )    
          ):<option value={"USD"}>USD</option>
        }
          </select>
          </FlexBoxContainer>   </StyledCont>

<ButtonWrapper>
          <button onClick={handleConvert}>convert</button>
          </ButtonWrapper>

       
          <h3>{convertCur}</h3>
      
     </StyledBody>
    
     )
}

export default Landing
