import styled from "styled-components";
import { BiDownArrow } from "react-icons/bi";

// index styles
export const StyledDashBody = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  margin: 0 auto;
`;
export const StyledDash = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;

  .donutWrapper {
    width: 100%;
  }
`;

export const StyledTable = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
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
    width: 25%;
  }

  .first {
    width: 50%;
  }
  .up {
    color: limegreen;
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

  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
  margin-top: 30px;
  width: 90%;
`;


// Finished Dashboard styles
