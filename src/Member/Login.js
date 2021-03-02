import React from 'react'

function Login() {
     return (
     <>
          <label>First Name: </label>
          <input name="fName" />
          <label>LastName: </label>
          <input name="lName" />
          <label>Email: </label>
          <input name="email" />
          <label>Password: </label>
          <input name="password" />
          <label>Re-Password: </label>
          <input name="rePassword" />
     </>
     )
}

export default Login
