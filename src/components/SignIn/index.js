import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { SignUpForm } from "../SignUp";
import { PasswordForgetForm } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import {useState} from "react"; 
import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
width: 550px;
border-radius: 4px;

h1 { 
margin-top: 10px;
margin-bottom: 70px;
display: block;
}

p{
  margin-bottom: 50px;
}

input {
  padding: 5px 15px 5px 5px;
  margin: 5px;
margin-bottom: 10px;
}

button {
  display: block;
  padding: 5px;
  margin: 0 auto;
}
`;

const Menu = styled.div`
padding-bottom:50px;
/* background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128)); */
width: 210px;
height: 400px;

h1 { 
  display: block;
  letter-spacing: 1.5px;
  padding: 10px 20px 5px 20px; 
  }

  h4 {
    margin-bottom: 30px;
    padding: 5px 20px 20px 20px;  
  }

  @media (max-width: 375px) {
    width: 160px;
  
    h1{
      font-size: 14px;
    }
    h4{
      font-size: 12px;
    }
  }
    @media (max-width: 320px) {
      width: 130px;
    
      h1{
        font-size: 14px;
        padding: 4px;
      }
      h4{
        font-size: 10px;
        padding: 4px;
      }
    }
`;

const SelectMenu = styled.div`
h3 { 
  padding: 25px;
  /* color: white; */

&:hover {
  cursor: pointer;

  /* background-color: rgb(96, 57, 128); */
}
}
@media (max-width: 375px) {

  h3{
    font-size: 12px;
  }
}
  @media (max-width: 320px) {

    h3{
 font-size: 10px;
    }
  }
`;

const Show = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;

select {
  margin: 10px;
  display: block;
}

input{
  margin: 0 auto;
  display: block;
  padding: 10px;
  margin: 10px;
}
`;


function SignInPage() {
<Switch>
  <Route exact path={ROUTES.SIGN_IN} component={SignInForm} />
</Switch> 
 
const [pageShown, setPageShown] = useState('signIn');  

function signIn(){
  setPageShown("signIn")
}

function signUp (){
setPageShown("signUp")
}

function forgotPassword() {
setPageShown("forgotPassword")
}


const pageShownComponent = () => {
if (pageShown === "signIn") {
 
  return  <SignInForm/> 

} else if (pageShown === "signUp"){
 
  return <SignUpForm />
}
 else if (pageShown === "forgotPassword"){

  return <PasswordForgetForm />
} }

return(
<PageContainer className='borderColor'>
      <Menu className='accountMenu'>
            <h1>Welcome!</h1> 
            <SelectMenu>
              <h3 onClick={signIn}>Sign in</h3>
              <h3 onClick={signUp}>Sign up</h3>
              <h3 onClick={forgotPassword}>Forgot password?</h3>
            </SelectMenu>
   </Menu>
   <Show>
   {pageShownComponent()}
   </Show>
   </PageContainer> 
)
};


const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="E-mail..."
        />

        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />

        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;
export { SignInForm }; 
