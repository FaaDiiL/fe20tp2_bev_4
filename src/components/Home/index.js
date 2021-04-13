import { getByPlaceholderText } from "@testing-library/dom";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

import { withAuthorization } from "../Session";
import Chart from "./dashboard";
import Form from "./form";
import Table from "./table";

const StyledDashBody = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin: 0 auto;
  margin-top: 100px;
`
const StyledDash = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;

  .donutWrapper {
    width: 30vw;
  }
`

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
    color: limeGreen;
    text-align: right;
  }
  .down {
    color: red;
    text-align: right;
  }
`

const HomePage = () => {
  const [base, setBase] = useState();
  const [curCode, setCurCode] = useState();
  const [doughnut, setDoughnut] = useState([
    {
      labels: "USD",
      amount: 500,
      ratesOnDate: 0.8532,
      baseTotal: 4700,
      date: "2021-01-03",
    },
  ]);
  const [totalAmount, setTotalAmount] = useState([]);
  const [totalInBaseCurr, setTotalInBaseCurr] = useState(0);

  const myLabels = doughnut.map((cur) => cur.labels);
  const myAmount = doughnut.map((cur) => cur.amount);

  function getColorsSB(length) {
    let pallet = ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"];
    let colors = [];

    for (let i = 0; i < length; i++) {
      colors.push(pallet[i % pallet.length]);
    }
    return colors;
  }
  console.log(getColorsSB());

  const data = {
    labels: myLabels,
    datasets: [
      {
        data: myAmount,
        backgroundColor: [
          "#003f5c",
          "#58508d",
          "#bc5090",
          "#ff6361",
          "#ffa600",
        ],
        // ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600", "#FF6384", "#36A2EB", "#FFCE56"]
        // hoverBackgroundColor: ["#b9faf8", "#a663cc", "#cdc1ff"],
      },
    ],
  };

  return (
    <>
      <StyledDashBody>
        <StyledTable>
          <Form setDoughnut={setDoughnut} doughnut={doughnut} />
          <Table
            doughnut={doughnut}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
        </StyledTable>
        <StyledDash>
          <div className="donutWrapper">
            {" "}
            {/* The Doughnut */}
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

          <Chart curCode={curCode} base={base} />
        </StyledDash>
      </StyledDashBody>
    </>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
