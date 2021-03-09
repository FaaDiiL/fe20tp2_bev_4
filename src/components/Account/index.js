import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import PasswordChangeForm from "../PasswordChange";

import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
align-items: center; 
flex-direction: column;

margin: 0 auto;
box-shadow: 1px 3px 5px #571D85;
margin-top: 100px;
padding: 50px;
width: 50%;

h1 { 

display: block;
}

h2 {
  margin-bottom: 50px;
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
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
