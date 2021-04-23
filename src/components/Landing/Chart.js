// import { useEffect, useState } from "../../constants/rates";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const StyledChart = styled.div`
  width: 100%;
  max-width: 600px;

  % > {
    width: 90%;
  }
`;

const Chart = ({ currencyCode, select1 = "SEK", todaysDate }) => {
  //BEGINNING

  function calculateSixMonthBefore() {
    // monthOfTodaysDate = dagens månad

    let datum = new Date();
    let today = datum.getDay();
    let sixMonthsAgo = datum.getMonth() - 6;
    datum.setMonth(sixMonthsAgo, today);
    return datum.toISOString().split("T")[0];
  }

  const URL = `https://api.exchangerate.host/timeseries?symbols=${currencyCode}&start_date=2020-01-01&end_date=2020-07-01&base=${select1}`;

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, [select1, currencyCode, URL]);

  const ratesData = Object.entries(rates);

  let dates = [];
  let rateOfDate = [];

  for (let i = 0; i < ratesData.length; i++) {
    if (ratesData[i][0].endsWith("01")) {
      dates.push(ratesData[i][0]);
      rateOfDate.push(ratesData[i][1][currencyCode]);
    }
  }

  const rateData = {
    labels: dates,
    datasets: [
      {
        label: `${select1} / ${currencyCode}`,
        backgroundColor: "rgba(245, 150, 20, 0.5)",
        borderColor: "#003F5C",
        borderWidth: 2,
        data: rateOfDate,
      },
    ],
  };

  return (
    <StyledChart>
      <Line
        data={rateData}
        width={60}
        height={60}
        options={{
          title: {
            display: true,
           
            fontSize: 10,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </StyledChart>
  );
};

export default Chart;
