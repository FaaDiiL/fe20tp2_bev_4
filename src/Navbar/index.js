import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"


const Container = styled.div`

/* ul {
      padding: 0;
      margin: 0;
    } */
    li {
      list-style: none;
      padding: 20px 0;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: lightblue;
      color: #292a2a;
      z-index: 4;
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
      background-color: #fff;
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
      background: lightgray;
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



class Index extends React.Component {
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
            <span className="logo" style={{ color: "#fff", fontStyle: "italic", fontWeight: "400" }}>B-E-V</span>
            <nav>
              <ul
                className="mainNav"
                style={this.state.sideBar ? { transform: "translateX(0)" } : null}
              >
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/landing'><li>Sign in</li></Link>
                <Link to='/admin'><li>Admin</li></Link>
              </ul>
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


// const Container = styled.div`
// overflow: hidden;
// `


// const Div = styled.div`

// #nav-icon4 {
//       z-index: 1001;
//       width: 60px;
//       height: 45px;
//       position: absolute;
//       top: 20px;
//       right: 20px;
//       -webkit-transform: rotate(0deg);
//       -moz-transform: rotate(0deg);
//       -o-transform: rotate(0deg);
//       transform: rotate(0deg);
//       -webkit-transition: .5s ease-in-out;
//       -moz-transition: .5s ease-in-out;
//       -o-transition: .5s ease-in-out;
//       transition: .5s ease-in-out;
//       cursor: pointer;
//       }

//       #nav-icon4 span {
//       display: block;
//       position: absolute;
//       height: 9px;
//       width: 100%;
//       background: black;
//       border-radius: 9px;
//       opacity: 1;
//       left: 0;
//       -webkit-transform: rotate(0deg);
//       -moz-transform: rotate(0deg);
//       -o-transform: rotate(0deg);
//       transform: rotate(0deg);
//       -webkit-transition: .25s ease-in-out;
//       -moz-transition: .25s ease-in-out;
//       -o-transition: .25s ease-in-out;
//       transition: .25s ease-in-out;
//       }


//       #nav-icon4 span:nth-child(1) {
//       top: 0px;
//       -webkit-transform-origin: left center;
//       -moz-transform-origin: left center;
//       -o-transform-origin: left center;
//       transform-origin: left center;
//       }

//       #nav-icon4 span:nth-child(2) {
//       top: 18px;
//       -webkit-transform-origin: left center;
//       -moz-transform-origin: left center;
//       -o-transform-origin: left center;
//       transform-origin: left center;
//       }

//       #nav-icon4 span:nth-child(3) {
//       top: 36px;
//       -webkit-transform-origin: left center;
//       -moz-transform-origin: left center;
//       -o-transform-origin: left center;
//       transform-origin: left center;
//       }

//       #nav-icon4.full span:nth-child(1) {
//       -webkit-transform: rotate(45deg);
//       -moz-transform: rotate(45deg);
//       -o-transform: rotate(45deg);
//       transform: rotate(45deg);
//       top: -3px;
//       left: 8px;
//       }

//       #nav-icon4.full span:nth-child(2) {
//       width: 0%;
//       opacity: 0;
//       }

//       #nav-icon4.full span:nth-child(3) {
//       -webkit-transform: rotate(-45deg);
//       -moz-transform: rotate(-45deg);
//       -o-transform: rotate(-45deg);
//       transform: rotate(-45deg);
//       top: 39px;
//       left: 8px;
//       }
// `


// const StyledNav = styled.nav`


// width: 280px;
// height: 100vh;
// position: absolute;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// right: 0;
// top:0;
// overflow: hidden;

// .fullOpen{
// width: 280px;
// height: 100vh;
// position: absolute;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// right: 0;
// top:0;
// }

//       ul{
//             height: 400px;
//             width: 100%;
//             display: grid;
//             place-items: center;
//             list-style: none;

//       }
//       li{
//             padding: 30px 20px;
//             width: 100%;
//       }

// `

// const Index = () => {
//       const [isOpen, setIsOpen] = useState(false);

//       const handleToggle = () => {
//             setIsOpen(!isOpen);
//       };

//       return (
//             <Container>
//                   <Div>
//                         <div id="nav-icon4" className={isOpen ? "full" : "none"} onClick={handleToggle}>
//                               <span></span>
//                               <span></span>
//                               <span></span>
//                         </div>
//                   </Div>

//                   <StyledNav className={isOpen ? "fullOpen" : "none"}>

//                         <ul>
//                               <Link to='/'><li>Home</li></Link>
//                               <Link to='/about'><li>About</li></Link>
//                               <Link to='/contact'><li>Contact</li></Link>
//                               <Link to='/landing'><li>Sign in</li></Link>
//                         </ul>
//                   </StyledNav>
//             </Container>
//       )
// }

// export default Index


