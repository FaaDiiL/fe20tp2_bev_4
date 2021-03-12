import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import PasswordChangeForm from "../PasswordChange";

import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
align-items: center; 
justify-content: center;
flex-direction: column;
margin: 0 auto;
box-shadow: 1px 3px 5px #571D85;
margin-top: 100px;
padding: 50px;
width: 100%;
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));

h1 { 

display: block;
color: white;
letter-spacing: 1.5px;
}

h2 {
  margin-bottom: 50px;
  color: white;
}

h3{
  margin: 20px;
color: white;
}
select {
  padding: 5px 15px 5px 5px;
  margin: 5px;
margin-bottom: 10px;
}

button {
  display: inline-block;
  padding: 5px;

  &:hover { 
    cursor: pointer;
    text-decoration: underline;
  }
}
`;


const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <PageContainer>
        <h1>Account:</h1> 
        <h2>{authUser.email}</h2>

        <h3>Change Password</h3>
        <PasswordChangeForm />
        <h3>Choose Bank</h3>
        <select name='bank' className='chooseBank'>
          <option value="" disabled selected>Select your Bank</option>
          <option>Swedbank</option>
          <option>Länsförsäkringar</option>
        </select>
        <h3>
          Delete Account
          </h3>
          <button>Delete account</button>
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
