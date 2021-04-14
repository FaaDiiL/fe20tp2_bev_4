import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledSignIn, Container } from "./style";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import logoLfImg from "../../img/lf.png";
import logoBevDeImg from "../../img/owl.svg";
import logoBevLfImg from "../../img/owlLf.svg";
import logoBevSbImg from "../../img/owlSb.svg";
import logoSbImg from "../../img/swedbank.png";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";

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
                {(authUser) =>
                  authUser ? (
                    authUser.bank === "LF" ? (
                      <>
                        <img
                          src={logoBevLfImg}
                          alt={"Site-logo"}
                          className="logo-img"
                        />
                        <img
                          src={logoLfImg}
                          alt={"Site-logo"}
                          className="bank-logo-img"
                        />
                      </>
                    ) : authUser.bank === "SB" ? (
                      <>
                        <img
                          src={logoBevSbImg}
                          alt={"Site-logo"}
                          className="logo-img"
                        />
                        <img
                          src={logoSbImg}
                          alt={"Site-logo"}
                          className="bank-logo-img"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={logoBevDeImg}
                          alt={"Site-logo"}
                          className="logo-img"
                        />
                        <span className="logo-text">BEV</span>
                      </>
                    )
                  ) : (
                    <>
                      <img
                        src={logoBevDeImg}
                        alt={"Site-logo"}
                        className="logo-img"
                      />
                      <span className="logo-text">BEV</span>
                    </>
                  )
                }
              </AuthUserContext.Consumer>
            </div>
            <nav>
              <AuthUserContext.Consumer>
                {(authUser) =>
                  authUser ? (
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
                    </ul>
                  ) : (
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
