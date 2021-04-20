import styled from "styled-components";

export const StyledIconDiv = styled.div``;

export const StyledDiv = styled.div`
  .icon {
    position: fixed;
    bottom: 30px;
    left: calc(100% - 120px);
    /* padding: 15px 18px; */
    /* margin-top: 18px; */
    cursor: pointer;
    border-radius: 50px;
    background: darkblue;
    aspect-ratio: 1 / 1;
    & > {
      transform: translateX(5px);
    }
  }
  .icon > {
    position: absolute;
    top: 10px;
    
  }

  .innerWrapper {
    position: fixed;
    bottom: 30px;
    left: calc(100% - 350px);
    background: white;
    width: 280px;
    height: 450px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 2px solid #e5e5ea;

    @media (max-width: 350px) {
      width: calc(100vw - 20px);
      left: 0;
      margin: 0 auto;
    }
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
  .editbtn {
    padding: 3px;
    margin: 0 3px;
    border-radius: 5px;
  }
`;
