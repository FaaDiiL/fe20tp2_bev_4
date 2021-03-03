import React, {useState} from 'react'
import styled from 'styled-components'

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

     const [convert, setConvert] = useState('')
     const [click, setClick] = useState('')

     const handleClick = () => {
       setClick(convert)
     }
      
     return (
          <StyledBody>
               <StyledCont>
                    <input onChange={(e) => setConvert(e.target.value)}type='number' />
               <select onChange={(e) => setConvert(e.target.value)} id="countries">
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
               </select>
          <select className='selectContainer' id="countries">
               <option value="GBP">GBP</option>
               <option value="EUR">EUR</option>
               <option value="USD">USD</option>
          </select>
          <button onClick={handleClick}>convert</button>
          </StyledCont>
          <h3>{click}</h3>
     </StyledBody>
    
     )
}

export default Landing
