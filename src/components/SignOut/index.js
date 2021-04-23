import React from "react";
import styled from "styled-components";

import { withFirebase } from "../Firebase";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 5px 10px 5px;
  outline: none;
  border: none;
  margin-top: 5vh;

  &:hover {
    cursor: pointer;
  }
`;

const SignOutButton = ({ firebase }) => (
  <Container>
    <Button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </Button>
  </Container>
);
export default withFirebase(SignOutButton);
