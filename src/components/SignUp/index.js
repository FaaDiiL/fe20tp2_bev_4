import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 100px;
    margin-bottom: 50px;
    display: block;
  }
  p {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input,
  select {
    padding: 5px 15px 5px 5px;
    margin: 5px;
    margin-bottom: 10px;
  }

  button {
    display: inline-block;
    padding: 5px;
  }
`;

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    display: block;
    margin-bottom: 15px;
  }
`;

const SignUpPage = () => (
  <PageContainer>
    <SignUpForm />
  </PageContainer>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  bank: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, isAdmin, bank } = this.state;

    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
          bank,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      bank,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "" ||
      bank === "";

    return (
      <PageContainer>
        <h3>Create an account</h3>
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />

          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="E-mail"
          />

          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <select
            name="bank"
            className="chooseBank"
            defaultValue=""
            onChange={this.onChange}
          >
            <option value="" disabled>
              Select your Bank
            </option>
            <option value="default">No Bank</option>
            <option value="SB">Swedbank</option>
            <option value="LF">Länsförsäkringar</option>
          </select>
          {/*           <label>
            Admin:
            <input
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
            />
          </label> */}
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </PageContainer>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm };
