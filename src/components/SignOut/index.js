import React from "react";
import styled from 'styled-components';

import { withFirebase } from "../Firebase";

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Button = styled.button`
padding: 10px 5px 10px 5px;
outline: none;
border: none;
margin-top: 150px;

&:hover {
  cursor: pointer;
  text-decoration: underline;
}
`;

const SignOutButton = ({ firebase }) => (
  <Div>
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
  </Div>
  );
export default withFirebase(SignOutButton);
