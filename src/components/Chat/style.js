import styled from "styled-components";
import "@fontsource/roboto"

export const StyledDiv = styled.div`

  font-family: roboto;
  font-size: 14px;
  z-index: 300;


  .innerWrapper {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: white;
    width: 280px;
    height: 450px;
    z-index: 100;
    border-radius:12px;
    border: 2px solid #e5e5ea;

    @media (max-width: 350px) {
      width: calc(100vw - 20px);
      left: 0;
      margin: 0 auto;
    }
  }

  .icon {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 30px;
    cursor: pointer;
    border-radius: 100vh;
    z-index: 100;

  }
  .icon > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    & > div {
      cursor: pointer;
    }
  }

  .main {
    height: 350px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: lightgray;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: darkgray;
      border-radius: 20px;
    }
  }

  ul,
  li {
    text-align: left;
    list-style: none;
  }

  .message {
    margin: 15px 0;
    display: flex;
    word-break: break-word;
  }
  .messageWrapper > div {
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100;
    max-width: 40px;
    max-height: 40px;
    min-width: 40px;
    min-height: 40px;
    aspect-ratio: 1 / 1;
  }

  .messageWrapper {
    display: flex;
  }

  .sent .messageWrapper {
    flex-direction: row-reverse;
  }

  .sent {
    flex-direction: row-reverse;
  }

  .received {
    color: black;
  }
  h1 {
    color: black;
  }

  .username {
    margin: 5px;
    color: white;
    text-transform: uppercase;
  }
  .sent .text {
    color: white;
    background: #0b93f6;
  }
  .received .text {
    background: #e5e5ea;
  }
  .text {
    margin: 0 0 0 0;
    border-radius: 8px;
    padding: 8px;
    width: 70%;
  }

  form {
    display: inline-flex;
    width: calc(100% + 2px);
    height: 40px;
    position: absolute;
    bottom: -1px;
    left: -1px;

    & > * {
      height: 100%;
    }

    input {
      font-size: 14px;
      padding: 0 5px;
      width: 80%;
      border: 1px solid darkgray;
      border-top: 1px solid darkgray;
      border-top-left-radius:12px;
      border-bottom-left-radius:12px;

      &:focus{
        outline: none;
      }
      &:active{
        outline: none;
      }
    }
    button {
      width: 20%;
      border-top-right-radius:12px;
      border-bottom-right-radius:12px;
    }
  }

  .settingsWrapper{
    display:flex;
    align-items: center;
  }

  .editbtn {
    padding: 3px;
    margin: 0 3px;
    border-radius: 5px;
  }
`;
