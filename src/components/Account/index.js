import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
align-items: center; 
flex-direction: column;

h1 { 
margin-top: 100px;
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
        <PasswordForgetForm />
        <PasswordChangeForm />
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
