import React, { Component } from "react";
import { withFirebase } from "../Firebase";


import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center; 
flex-direction: column;

h1 { 
margin-top: 100px;
display: block;
}

p{
  margin: 10px;
}

input {
  padding: 5px 15px 5px 5px;
  margin-bottom: 15px;
}
button {
  display: block;
  margin: 0 auto;
}

h3{
  display: block;
  text-align: center;
}
`;

const DIV = styled.div`
display: flex;
justify-content: center; 
align-items: center;
flex-direction: column;

h3{
  display: block;
  text-align: center;
  margin-bottom: 40px;
  width: 180px;
}
`;

 const PasswordForgetPage = () => (
  <PageContainer>
    <h1> Reset your password by entering your e-mail:</h1>

   <PasswordForgetForm />
  </PageContainer>
); 

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
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
    const { email, error } = this.state;
    const isInvalid = email === "";

    return (
      <DIV>
    <h3>No worries! Type in your e-mail and we'll send you a link to reset your password.</h3>
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="E-mail..."
        />

        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </DIV>);
  }
}


 export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm};
