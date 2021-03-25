import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    letter-spacing: 1.5px;
    margin-top: 20px;
    /* color: #571d85; */
    text-align: center;
  }
`;

export const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  opacity: 0.9;

  /* background-image: linear-gradient(
    rgba(109, 84, 129, 0.829),
    rgb(96, 57, 128)
  ); */
  /* background-color: #613685; */

  input {
    padding: 10px 0px 10px 0px;
    border: none;
    border-radius: 2%;
    font-size: 25px;
    text-align: center;
    margin-bottom: 25px;

    &:focus {
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      /* border-bottom: 3px solid #571d85; */
    }
  }

  h2 {
    /* color: white; */
    width: 100%;
    margin: 10px;
    text-align:center;
  }

  select {
    /* background: rgb(59, 26, 87); */
    display: flex;
    flex-wrap: nowrap;
    /* color: white; */
    padding: 20px;
    border-radius: 2%;
    margin: 5px 15px;
    outline: none;
    border: none;
    /* box-shadow: 1px 3px 5px rgb(96, 57, 128); */
  }

  .btn {
    width: 200px;
    letter-spacing: 1.5px;
    color: #ffffff;
    border: none;
    /* box-shadow: 1px 3px 5px rgb(96, 57, 128); */
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    /* background: rgb(59, 26, 87); */
    margin-top: 20px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .btn:focus {
    outline: none;
  }
`;

export const FlexBoxContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  button  {
    border: none;
    /* background-color: transparent;
    color: black; */

    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export const CurrencyContainer = styled.div`
  /* background-image: linear-gradient(
    rgba(109, 84, 129, 0.829),
    rgb(96, 57, 128)
  ); */
  width: 100%;
`;

export const ConvertContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  min-height: 150px;

  p {
    text-align: center;
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;  

