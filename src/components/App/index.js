import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Error from '../Error';
import LandingPage from '../Landing';
import About from '../About';
import Contact from '../Contact';

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";


const App = () => (
  
  <Router>
    <div>
      <Navigation />
      <hr />
      <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> 
      <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);

{/* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route> */}