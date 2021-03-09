import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

import { AuthUserContext } from "../Session";


const Container = styled.div`

    li {
      list-style: none;
      padding: 20px 0;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      color: #333;
      z-index: 10;
      background-color: #fff;
      box-shadow: 0 5px 20px -10px #000
      
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
      font-size: 1.25em;
      padding: 0.95em 0;
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
      cursor: pointer;
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
      transition: all 0.3s cubic-bezier(1, 0.13, 0.35, 1.09);
    }
    .navToggle.open span{
      background:#333;
    }
    
    .navToggle span:last-child {
      margin-bottom: 0;
    }
    .wrapper{
      z-index:-1;
      position:fixed;
      height:100vh;
    /*   background: lightgray; */
      width:100%;
      left:0;
      right:0;
      bottom:0;
    }
    .mainNav {
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
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
`

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false
    }

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar
    });
  }

  render() {
    return (
      <Container>
        <header className="header">
          <div className="navContainer">
            <span className="logo" style={{fontStyle: "italic", fontWeight: "400" }}>B-E-V</span>
            <nav>
            <AuthUserContext.Consumer>

                  {(authUser) =>
                    authUser ? (
                      <ul className="mainNav" style={this.state.sideBar ? { transform: "translateX(0)" } : null}>
                      <Link to={ROUTES.LANDING}><li>
                        Landing</li></Link>
                      
                      <Link to={ROUTES.HOME}><li>
                        Home</li></Link>
                      
                      <Link to={ROUTES.ACCOUNT}><li>
                        Account</li></Link>
                      
                      {!!authUser.roles[ROLES.ADMIN] && (
                        <Link to={ROUTES.ADMIN}><li>
                          Admin</li></Link>
                      )}
                      <li>
                        <SignOutButton />
                      </li>
                  
                    </ul>
                    ) : (
                      <ul className="mainNav" style={this.state.sideBar ? { transform: "translateX(0)" } : null}>
                      <Link to={ROUTES.LANDING}><li>
                        Landing</li></Link>
                      
                      <Link to={ROUTES.SIGN_IN}><li>
                        Sign In </li></Link>

                    </ul>
                    )

                  }

                  {/* <Link to='/'><li>Home</li></Link>
                  <Link to='/about'><li>About</li></Link>
                  <Link to='/contact'><li>Contact</li></Link>
                  <Link to='/landing'><li>Sign in</li></Link>
                  <Link to='/admin'><li>Admin</li></Link> */}
                {/* </ul> */}

              </AuthUserContext.Consumer>
            </nav>
            <button
              onClick={this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}>
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


