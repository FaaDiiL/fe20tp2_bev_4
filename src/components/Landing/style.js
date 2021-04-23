import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  label {
    font-size: 10px;
    font-size: 10px;
    color: white;
    padding: 10px 90px 10px 90px;
  }
`;

export const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  opacity: 0.8;


  input {
    padding: 10px 0px 10px 0px;
    border: none;
    font-size: 25px;
    text-align: center;
    margin-bottom: 25px;

    &:focus {
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }

  h2 {
    letter-spacing: 1.7px;
    font-size: 50px;
    width: 100%;
    margin: 10px;
    text-align:center;
    margin-bottom: 60px;
  }

  select {
    display: flex;
    flex-wrap: nowrap;
    padding: 20px;
    border-radius: 2%;
    margin: 0px 30px 0px 30px;
    outline: none;
    border: none;
  }

  .btn {
    width: 180px;
    letter-spacing: 1.5px;
    border: none;
    padding: 8px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 40px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .btn:focus {
    outline: none;
  }
`;

export const Labels = styled.div`
display: flex;
flex-direction: row; 
position: relative;
justify-content: space-evenly;

span {
  margin: 10px 48px 0px 48px;
  font-size: 10px;
  color: white;
  padding: 10px 30px 10px 30px;
  }
`;

export const FlexBoxContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  button  {
    border: none;
    
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export const CurrencyContainer = styled.div`

  width: 100%;
`;

export const ConvertContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
   min-height: 150px;

  p {
    text-align: center;
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;  

