// import { useState } from '@testing-library/dom'
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import { withAuthorization } from "../Session";
import Chart from "./dashboard";
import Form from "./form";
import { StyledDash, StyledDashBody, StyledTable } from "./styles.js";
import Table from "./table";

const HomePage = () => {
  const [doughnut, setDoughnut] = useState([
    {
      labels: "USD",
      amount: 500,
      ratesOnDate: 0.8532,
      baseTotal: 4700,
      date: "2021-01-03",
      currPerfomancePercentage: "15",
      currPerfomanceAmount: "142",
    },
  ]);
  const [totalAmount, setTotalAmount] = useState([]);

  const myLabels = doughnut.map((cur) => cur.labels);
  const myAmount = doughnut.map((cur) => cur.amount);

  // function getColorsSB(length) {
  //   let pallet = ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"];
  //   let colors = [];

  //   for (let i = 0; i < length; i++) {
  //     colors.push(pallet[i % pallet.length]);
  //   }
  //   return colors;
  // }

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
      },
    ],
  };

  return (
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
          <Doughnut
            data={data}
            width={100}
            height={50}
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
      </StyledDash>
    </StyledDashBody>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
