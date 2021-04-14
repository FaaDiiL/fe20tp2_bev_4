import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { StyledDashBody, StyledDash, StyledTable } from "./styles.js";
import Form from "./form";
import Table from "./table";
import { withAuthorization } from "../Session";
import Chart from "./dashboard";

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
