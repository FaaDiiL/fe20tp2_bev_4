import styled from "styled-components";
import "@fontsource/audiowide";

export const Container = styled.div`
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
export const StyledSignIn = styled.li`
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
