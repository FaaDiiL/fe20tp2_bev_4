import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import GlobalStyle, { GlobalStyleLF, GlobalStyleSB } from "../../GlobalStyle";
import About from "../About";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import ContactPage from "../Contact";
import Error from "../Error";
import HomePage from "../Home";
import LandingPage from "../Landing";
import Navbar from "../Navbar";
import PasswordForgetPage from "../PasswordForget";
import { withAuthentication } from "../Session";
import { AuthUserContext } from "../Session";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import Footer from "../Footer";

const App = () => (
  <Router>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          authUser.bank === "LF" ? (
            <GlobalStyleLF />
          ) : authUser.bank === "SB" ? (
            <GlobalStyleSB />
          ) : (
            <GlobalStyle />
          )
        ) : (
          <GlobalStyle />
        )
      }
    </AuthUserContext.Consumer>
    <Navbar />
    <div className="window-view-height">
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.CONTACT} component={ContactPage} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route component={Error} />
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default withAuthentication(App);
