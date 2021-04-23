import React, { Component } from 'react'
import { useState } from 'react'
import GoogleButton from 'react-google-button'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'
import { PasswordForgetForm } from '../PasswordForget'
import { SignUpForm } from '../SignUp'

const LogIn = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`
const SignInFormLayout = styled.div`
display: flex;
justify-content: center; 
align-items: center;
flex-direction: column;

`;

const PageContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  width: 550px;
  border-radius: 4px;

  h1 {
    margin-top: 10px;
    margin-bottom: 70px;
    display: block;
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

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const Menu = styled.div`
  padding-bottom: 50px;
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

    h1 {
      font-size: 14px;
    }
    h4 {
      font-size: 12px;
    }
  }
  @media (max-width: 320px) {
    width: 130px;

    h1 {
      font-size: 14px;
      padding: 4px;
    }
    h4 {
      font-size: 10px;
      padding: 4px;
    }
  }
`

const SelectMenu = styled.div`
  h3 {
    padding: 25px;

    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 375px) {
    h3 {
      font-size: 12px;
    }
  }
  @media (max-width: 320px) {
    h3 {
      font-size: 10px;
    }
  }
`

const LogInErrorMessage = styled.p `
width: 60%;
font-size: 10px;
color: red;
margin-top: 15px;
text-align: center;
border: 1px solid red;
padding: 5px;
margin-bottom: 0px;
`;

const SignInWithGoogleContainer = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
flex-direction: column;
margin-top: 20px;
`;


const Show = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 120px;

  select {
    margin: 10px;
    display: block;
  }

  label {
    margin-left: 15px;
  }

  input {
    margin: 0 auto;
    display: block;
    padding: 10px;
    margin: 0px 15px 15px 15px;
  }
`

function SignInPage() {
  <Switch>
    <Route exact path={ROUTES.SIGN_IN} component={SignInForm} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInGoogle} />
  </Switch>

  const [pageShown, setPageShown] = useState('signIn')

  function signIn() {
    setPageShown('signIn')
  }

  function signUp() {
    setPageShown('signUp')
  }

  function forgotPassword() {
    setPageShown('forgotPassword')
  }

  //Show different components on menu clicks
  const pageShownComponent = () => {
    if (pageShown === 'signIn') {
      return <SignInForm />
    }else if (pageShown === 'signUp') {
      return <SignUpForm />
    } else if (pageShown === 'forgotPassword') {
      return <PasswordForgetForm />
    }
  }

  return (
    <LogIn>
      <PageContainer className='borderColor'>
        <Menu className='accountMenu'>
          <h1>Welcome!</h1>
          <SelectMenu>
            <h3 onClick={signIn}>Sign in</h3>
            <h3 onClick={signUp}>Sign up</h3>
            <h3 onClick={forgotPassword}>Forgot password?</h3>
          </SelectMenu>
        </Menu>
        <Show>{pageShownComponent()}</Show>
      </PageContainer>
    </LogIn>
  )
}

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const { email, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.LANDING)
      })

      .catch((error) => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { email, password, error } = this.state
    const isInvalid = password === '' || email === ''

    return (
      <div>
       <SignInFormLayout>
           <form onSubmit={this.onSubmit}>

        <label>
          E-mail
          <input
            name='email'
            value={email}
            onChange={this.onChange}
            type='text'
            placeholder='E-mail...'
          />
        </label>

        <label>
          Password
          <input
            name='password'
            value={password}
            onChange={this.onChange}
            type='password'
            placeholder='Password'
          />
        </label>
     

        <button disabled={isInvalid} type='submit'>
          Sign In
        </button>
    
      </form>
      {error && <LogInErrorMessage>{error.message}</LogInErrorMessage>}
      </SignInFormLayout>
  
      <SignInWithGoogleContainer>
      <span>OR</span>
      <SignInGoogle />
      </SignInWithGoogleContainer>
      </div>
    )
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        })
      })
      .then((socialAuthUser) => {
        this.setState({ error: null })
        this.props.history.push(ROUTES.HOME)
      })
      .catch((error) => {
        this.setState({ error })
      })
    event.preventDefault()
  }
  render() {
    const { error } = this.state
    return (
      <form onSubmit={this.onSubmit}>
      <button style={{backgroundColor: 'transparent'}} type="submit"><GoogleButton /></button>
     
        {error && <LogInErrorMessage>{error.message}</LogInErrorMessage>}
      </form>
    )
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase))
const SignInGoogle = withRouter(withFirebase(SignInGoogleBase))

export default SignInPage
export { SignInForm, SignInGoogle }
