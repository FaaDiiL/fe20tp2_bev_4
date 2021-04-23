import { BiDownArrow } from "react-icons/bi";
import styled from "styled-components";

// index styles
export const StyledDashBody = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const StyledDash = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;

  .donutWrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    /* min-width: 90%; */
    margin-bottom:50px;

    @media(max-width: 500px){
      width: 90%;
    }
  }
`;

export const StyledTable = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px){
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 900px){
    width: 80%;

    li{
        font-size: 14px;
        padding-left: 20px;
        
        &:hover:not(:nth-child(-n + 2)) {
        cursor: pointer;
        background-color: #ededed;
        }
      }
    }

  input,
  select {
    width: 100%;
    padding: 12px 8px;
    border: none;
    outline: none;
    display: flex;
    margin-bottom: 15px;
  }

  ul {
    width: 100%;
    list-style: none;
    align-self: flex-start;
    text-align: left;
    margin: 40px 0px 40px 0px;
  }

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 5px;
    border-bottom: 1px solid #d4d0dc;
    
  }
  span {
    width: 100%;
  }
  p {
    text-align: center;
  }

  .first {
    width: 50%;
  }
  .up {
    color: limeGreen;
    text-align: right;
  }
  .down {
    color: red;
    text-align: right;
  }
`;
// Finished index styles

// Form styles

export const Button = styled.button`
  padding: 10px 17px 10px 10px;
  border: none;
  margin-bottom: 5px;
  position: relative;
  margin: 0 auto;
  text-align: center;

  &:hover {
    cursor: pointer;
    
  }
`;

export const AddButton = styled.button`
  padding: 5px 20px;
  border: none;
  margin-bottom: 5px;
  position: relative;
  margin: 0 auto;
  text-align: center;

  &:hover {
    cursor: pointer;
    
  }
`;

export const Arrow = styled(BiDownArrow)`
  position: absolute;
  color: white;
  padding: 1.5%;
  transform: scale(1);
  margin: 1%;
  &.active {
    transform: rotate(180deg);
  }
`;

// Finished Form styles

// Dashboard styles

export const StyledChart = styled.div`
  margin-top: 100px;
  width: 75%;
  margin: 15 auto;
`;

// Finished Dashboard styles

// Table styles

export const StyledButton = styled.button`

  padding: 10px 17px 10px 10px;
  border: none;
  margin-bottom: 5px;
  position: relative;
  margin: 0 auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }

`
