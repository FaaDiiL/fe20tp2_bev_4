import React, { Component } from "react";

import { withFirebase } from "../Firebase";

import styled from 'styled-components'

const Form = styled.form`
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

form { 
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px 15px 5px 5px;
  margin: 2px;
margin-bottom: 5px;
}

button {
  margin-top: 10px;
  display: inline-block;
  padding: 5px;
}
`;


const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <Form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset Password
        </button>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}
export default withFirebase(PasswordChangeForm);
