import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"

const StyledNav = styled.nav`
width: 280px;
height: 100vh;
position: absolute;
right: 0;
top: 0;
z-index: 999;

      ul{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style: none;
      }
      li{
            padding: 20px 0;
      }
`

const Index = () => {
     return (
            <StyledNav>
                  <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/member'><li>Sign in</li></Link>
                  </ul>
            </StyledNav>
            )
      }

export default Index