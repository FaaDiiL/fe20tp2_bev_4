import { Box } from '@material-ui/core'
import { MD5 } from 'crypto-js'
import React, { Component } from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

import * as ROLES from '../../constants/roles'
import * as ROUTES from '../../constants/routes'
import logoLfImg from '../../img/lf.png'
import logoBevDeImg from '../../img/owl.svg'
import logoBevLfImg from '../../img/owlLf.svg'
import logoBevSbImg from '../../img/owlSb.svg'
import logoSbImg from '../../img/swedbank.png'
import { AuthUserContext } from '../Session'
import SignOutButton from '../SignOut'
import { Container, StyledSignIn, SignInButton } from './style'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideBar: false,
    }

    this.handleSidebar = this.handleSidebar.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar,
    })
  }

  handleClick(e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'BUTTON') {
      this.setState({
        sideBar: !this.state.sideBar,
      })
    }
  }

  render() {
    return (
      <Container>
        <header className='header'>
          <div className='navContainer'>
            <div className={'logo'}>
              <AuthUserContext.Consumer>
                {(authUser) =>
                  authUser ? (
                    authUser.bank === 'LF' ? (
                      <>
                        <Link to={ROUTES.LANDING}>
                          <img
                            src={logoBevLfImg}
                            alt={'Site-logo'}
                            className='logo-img'
                          />
                        </Link>
                        <img
                          src={logoLfImg}
                          alt={'Site-logo'}
                          className='bank-logo-img'
                        />
                      </>
                    ) : authUser.bank === 'SB' ? (
                      <>
                        <Link to={ROUTES.LANDING}>
                          <img
                            src={logoBevSbImg}
                            alt={'Site-logo'}
                            className='logo-img'
                          />
                          <img
                            src={logoSbImg}
                            alt={'Site-logo'}
                            className='bank-logo-img'
                          />
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to={ROUTES.LANDING}>
                          <img
                            src={logoBevDeImg}
                            alt={'Site-logo'}
                            className='logo-img'
                          />
                        </Link>
                        <span className='logo-text'>BEV</span>
                      </>
                    )
                  ) : (
                    <>
                      <Link to={ROUTES.LANDING}>
                        <img
                          src={logoBevDeImg}
                          alt={'Site-logo'}
                          className='logo-img'
                        />
                        <span className='logo-text'>BEV</span>
                      </Link>
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
                      className='mainNav'
                      style={
                        this.state.sideBar
                          ? { transform: 'translateX(0)' }
                          : null
                      }
                    >
                      <Link to={ROUTES.LANDING}>
                        <li>Home</li>
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
                     
                     
                     <SignOutButton />
                    </ul>
                  ) : (
                    <ul
                      onClick={this.handleClick}
                      className='mainNav'
                      style={
                        this.state.sideBar
                          ? { transform: 'translateX(0)' }
                          : null
                      }
                    >
                      <Link to={ROUTES.LANDING}>
                        <li>Home</li>
                      </Link>

                      <Link to={ROUTES.ABOUT}>
                        <li>About</li>
                      </Link>

                      <Link to={ROUTES.CONTACT}>
                        <li>Contact</li>
                      </Link>
                    </ul>
                  )
                }
              </AuthUserContext.Consumer>
            </nav>
            <Box display='flex' alignItems='center' p={1}>
              <AuthUserContext.Consumer>
                {(authUser) =>
                  authUser ? (
                    <>
                      <Link to={ROUTES.ACCOUNT} >
                        <Box
                          display='flex'
                          flexDirection='row'
                          alignItems='center'
                          p={1}
                        >
                          <Avatar
                            title={`${authUser.username}`}
                            size='35'
                            md5Email={`${MD5(authUser.email)}`}
                            value={`${authUser.username.substring(0, 2).toUpperCase()}`}
                            round
                            color=''
                          />
                          <p style={{ marginLeft: '10px' }}>
                            {authUser.username.split(/\s/).length > 1
                              ? authUser.username
                                  .split(/\s/, [1])
                                  .reduce(
                                    (response, word) =>
                                      (response += word.slice(0, word.length)),
                                    ''
                                  )
                                  .toUpperCase()
                              : authUser.username.length < 10 &&
                                authUser.username.toUpperCase()}
                          </p>
                        </Box>
                      </Link>
                    </>
                  ) : (
                    <Link to={ROUTES.SIGN_IN}><SignInButton>Sign In </SignInButton></Link>
                  )
                }
              </AuthUserContext.Consumer>

              <button
                onClick={this.handleSidebar}
                className={`navToggle ${this.state.sideBar ? 'open' : null}`}
              >
                <span />
                <span />
                <span />
              </button>
            </Box>
            <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? 'open' : ''}`}
            />
          </div>
        </header>
        <div className='wrapper'></div>
      </Container>
    )
  }
}

export default Index
