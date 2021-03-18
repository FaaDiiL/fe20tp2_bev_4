import styled from 'styled-components'

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 5%;

  h1 {
    margin-top: 20px;
    color: #571d85;
    text-align: center
  }
`

export const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* width: 60%; */
  min-height: 450px;
  opacity: 0.9;
  border-radius: 5%;

  @media (max-width: 375px) {
    /* width: 80%; */
    input {
      /* margin-bottom: -150px; */
    }
  }

  input {
    
    box-shadow: 1px 3px 5px #571d85;
    padding: 25px;
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
      border-bottom: 3px solid #571d85;
    }
  }
  select {
    display: flex;
    flex-wrap: nowrap;
    /* width: 40%; */
    padding: 25px;
    border: 3px solid #f8f9fa;
    border-radius: 2%;
    margin: 5px 15px;
    /* margin-bottom: -50px; */
    background-color: white;
    box-shadow: 1px 3px 5px #571d85;

    &:focus {
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 3px solid #571d85;
    }
  }
  .btn {
    width: 60%;
    letter-spacing:1.5px;
    color: #ffffff;
    border: none;
    box-shadow: 1px 3px 5px #571d85;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    background: #571D85;
    border-radius: 10px;

     &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .btn:focus {
    outline: none;
  }
`


export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  button  {
    border: none;
    box-shadow: 1px 3px 5px #571d85;

    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`