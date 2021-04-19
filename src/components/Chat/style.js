import styled from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: calc(100% - 350px);
  background: white;
  width: 310px;
  height: 450px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 2px solid #e5e5ea;

  @media (max-width: 350px) {
    width: 100vw;
    left: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .innerWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .main {
    overflow-y: scroll;
    height: 360px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: darkgray;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 10px;
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
  .messageWrapper div span {
    font-size: 14px;
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
    border-radius: 8px;
    padding: 8px;
    width: 70%;
    /* padding: 5px; */
  }

  form {
    display: inline-flex;
    /* position: absolute;
    bottom: 0; */
    width: 100%;
    height: 40px;

    & > * {
      height: 100%;
    }

    input {
      font-size: 16px;
      padding: 0 5px;
      width: 80%;
    }
    button {
      width: 20%;
    }
  }
`;
