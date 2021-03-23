import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

import { withAuthorization } from "../Session";
import Chart from "./dashboard";

const StyledDashBody = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin: 0 auto;
  margin-top: 100px;
`;
const StyledDash = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;

  .donutWrapper {
    width: 100%;
  }
`;

const StyledTable = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 8px;
    border: none;
    outline: none;
    border-bottom: 3px solid #571d85;
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

const HomePage = () => {
  // //random color generator ------->
  // let COLORS = [];
  // while (COLORS.length < 100) {
  //   COLORS.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
  // }

  // // random number generator
  // function rand(frm, to) {
  //   return ~~(Math.random() * (to - frm)) + frm;
  // }
  // //------------->

  const data = {
    labels: ["USD", "CAD", "THB"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        // hoverBackgroundColor: ["#b9faf8", "#a663cc", "#cdc1ff"],
      },
    ],
  };

  return (
    <StyledDashBody>
      <StyledTable>
        <form>
          <input type="text" name="currencyCode" placeholder="Currency" />
          <input type="number" name="amount" placeholder="Amount" />
        </form>
        {/* <h4>savings</h4> */}
        <ul>
          <li>
            <span className="first">Savings</span>
            <span className="first" style={{ textAlign: "right" }}>
              Total:1011120kr
            </span>
          </li>
          <li>
            <span className="first">500 USD </span>
            <span>31020kr</span>
            <span className="up">12%</span>
          </li>
          <li>
            <span className="first">1250 CAD </span>
            <span>24030kr</span>
            <span className="down">8%</span>
          </li>
          <li>
            <span className="first">10780 THB </span>
            <span>2972kr</span>
            <span className="down">8%</span>
          </li>
        </ul>
      </StyledTable>
      <StyledDash>
        <div className="donutWrapper">
          <Doughnut
            data={data}
            width={200}
            height={150}
            options={{
              title: {
                display: true,
                text: "My Savings",
                fontSize: 14,
              },
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        </div>

        <Chart />
        <Chart />
        <Chart />
        <Chart />
      </StyledDash>
    </StyledDashBody>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
