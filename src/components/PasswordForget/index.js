import React, { Component } from "react";
import { withFirebase } from "../Firebase";


import styled from 'styled-components'

 const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center; 
flex-direction: column;

h2 { 
font-size: 16px;
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
h2{
  display: block;
  text-align: center;
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

h2{
  display: block;
  text-align: center;
  margin-bottom: 40px;
}
`;

const ErrorMessage = styled.p `
width: 80%;
margin-left: 20px;
font-size: 10px;
color: red;
margin-top: 15px;
text-align: center;
border: 1px solid red;
padding: 5px;
margin-bottom: 0px;
`;

  const PasswordForgetPage = () => (
  <PageContainer>
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
      <h2>Type in your e-mail and we'll send you a link to reset your password.</h2>
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
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </form>
    </DIV>);
  }
}


 export default PasswordForgetPage; 

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm};
