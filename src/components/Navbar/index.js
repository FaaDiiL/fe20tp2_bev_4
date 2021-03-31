import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import logoLfImg from "../../img/lf.png";
import logoBevDeImg from "../../img/owl.svg";
import logoBevLfImg from "../../img/owlLf.svg";
import logoBevSbImg from "../../img/owlSb.svg";
import logoSbImg from "../../img/swedbank.png";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";

import "@fontsource/audiowide";

const Container = styled.div`
  li {
    list-style: none;
    padding: 50px 0px 0px 20px;

    &:hover  {
      color: #571d85;
    }
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: #333;
    z-index: 10;
    background-color: #fff;
    /* box-shadow: 0 5px 20px -10px #571d85 #000; */
  }

  .header a {
    color: inherit;
    text-decoration: none;
  }
  .header .navContainer {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    max-width: 1230px;
    margin: 0 auto;
  }
  .logo {
    margin: auto 0;
    /* for the bev text next to the logo */
    .logo-text {
      font-family: "Audiowide";
      font-size: 25px;
      color: #571d85;
      letter-spacing: 5px;
    }
    /* for the bev owl image */
    .logo-img {
      height: 38px;
    }
    /* for the bank-logo image */
    .bank-logo-img {
      padding-left: 15px;
      height: 25px;
    }
    
  }
  .navToggle {
    display: block;
    background-color: transparent;
    border: none;
    height: 38px;
    width: 38px;
    padding: 8px 8px;
    margin: 10px -8px 10px 0px;
    outline: none;
    /* cursor: pointer; */
    z-index: 5;
  }
  .navToggle.open span:first-child {
    transform: rotate(45deg) translate(4.4px, 4.4px);
  }
  .navToggle.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }
  .navToggle.open span:last-child {
    transform: rotate(-45deg) translate(4.4px, -4.4px);
  }
  .navToggle span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    background-color: #333;
    border-radius: 5px;
    /* transition: all 0.3s cubic-bezier(1, 0.13, 0.35, 1.09); */
  }
  .navToggle.open span {
    background: #333;
  }

  .navToggle span:last-child {
    margin-bottom: 0;
  }

  .mainNav {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 58px 15px;
    z-index: 3;
    transform: translateX(100%);
    transition: transform 0.25s ease;
    overflow-y: auto;
  }
  .mainNav.open {
    transform: translateX(0%);
  }
  .mainNav .mainNavLink {
    display: block;
    padding: 0.71875rem 0;
    text-transform: capitalize;
  }
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    height: 0;
    width: 0;
    background-color: #08333333;
    opacity: 0;
    transition: opacity 1s ease 0.1s;
  }
  .overlay.open {
    opacity: 3;
    width: 100%;
    height: 120%;
  }
`;
const StyledSignIn = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: initial;

  button {
    background-color: #571d85;
    padding: 10px 5px 10px 5px;
    outline: none;
    border: none;
    color: white;
    margin-top: 150px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    };

    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  }


  handleClick(e) {
    if (e.target.nodeName === "LI" || e.target.nodeName === "BUTTON") {
      this.setState({
        sideBar: !this.state.sideBar,
      });
    }
  }
  
  render() {

    return (
      <Container>
        <header className="header">
          <div className="navContainer">
            <div className={"logo"}>
            <AuthUserContext.Consumer>
            { 
              authUser => 
              authUser ?
              authUser.bank === "LF"? (
                <>
                  <img src={logoBevLfImg} alt={"Site-logo"} className="logo-img" />
                  <img src={logoLfImg} alt={"Site-logo"} className="bank-logo-img" /> 
                </>
              ):
              authUser.bank === "SB"?(
                <>
                  <img src={logoBevSbImg} alt={"Site-logo"} className="logo-img" />
                  <img src={logoSbImg} alt={"Site-logo"} className="bank-logo-img" />
                </>
              ):
              (
                  <>
                    <img src={logoBevDeImg} alt={"Site-logo"} className="logo-img" />
                    <span className="logo-text">BEV</span>
                  </>
                ):
                (
                  <>
                    <img src={logoBevDeImg} alt={"Site-logo"} className="logo-img" />
                    <span className="logo-text">BEV</span>
                  </>
                )
            }
              </AuthUserContext.Consumer>
            </div>
            <nav>
            
              <AuthUserContext.Consumer>
                {
                     (authUser) =>   
                     
                     authUser ?
                    (

                    <ul
                      onClick={this.handleClick}
                      className="mainNav"
                      style={
                        this.state.sideBar
                          ? { transform: "translateX(0)" }
                          : null
                      }
                      
                    >
                      <Link to={ROUTES.LANDING}>
                        <li>Landing</li>
                      </Link>

                      <Link to={ROUTES.HOME}>
                        <li>Dashboard</li>
                      </Link>

                      <Link to={ROUTES.ACCOUNT}>
                        <li>Account</li>
                      </Link>

                      <Link to={ROUTES.ABOUT}>
                        <li>About</li>
                      </Link>

                      <Link to={ROUTES.CONTACT}>
                        <li>Contact</li>
                      </Link>
                      {!!authUser.roles[ROLES.ADMIN] && (
                        <Link to={ROUTES.ADMIN}>
                          <li>Admin</li>
                        </Link>
                      )}
                      <li>
                        <SignOutButton />
                      </li>
                  {() => this.setState({currentBank: authUser.bank})}
                    </ul>
                  ): (
                    <ul
                      onClick={this.handleClick}
                      className="mainNav"
                      style={
                        this.state.sideBar
                          ? { transform: "translateX(0)" }
                          : null
                      }
                    >
                      <Link to={ROUTES.LANDING}>
                        <li>Landing</li>
                      </Link>

                      <Link to={ROUTES.ABOUT}>
                        <li>About</li>
                      </Link>

                      <Link to={ROUTES.CONTACT}>
                        <li>Contact</li>
                      </Link>

                      <Link to={ROUTES.SIGN_IN}>
                        <StyledSignIn>
                          <button>Sign In</button>
                        </StyledSignIn>
                      </Link>
                    </ul>
                  )
                }
                
              </AuthUserContext.Consumer>
            </nav>
            <button
              onClick={this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
            />
          </div>
        </header>
        <div className="wrapper"></div>
      </Container>
    );
  }
}

export default Index;
