import React from 'react'
import styled from 'styled-components'

const StyledLoginContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;

.selectContainer{

}
`
function emailValidation(email){
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email)
}
function handleSubmit(e) {
  e.preventDefault()
 if(!emailValidation(e.target[0].value)){
      console.error('Email credential wrong formatted! emai@mail.com')
 } else if (e.target[1].value.length < 1) {
      console.log('Password to short!')
 }
 else{
      alert('You are logged in!')
 }
  
}
function Login() {
     return (
       <StyledLoginContainer>
         <form onSubmit={handleSubmit}>
           <label>Email: </label>
           <input type='text' name='email' />
           <label>Password: </label>
           <input type='password' name='current-password' />
           <input type='submit' value='Log in' />
         </form>
       </StyledLoginContainer>
     )
}

export default Login
