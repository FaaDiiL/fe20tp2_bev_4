// import { useEffect, useState } from "../../constants/rates";
import {useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";

const Chart = ({ currencyCode, select1= 'SEK', todaysDate }) => {
  //BEGINNING

  function calculateSixMonthBefore() {
    // monthOfTodaysDate = dagens månad

    let datum = new Date();
    let today = datum.getDay();
    let sixMonthsAgo = datum.getMonth() - 6;
    datum.setMonth(sixMonthsAgo, today);
    return datum.toISOString().split("T")[0];

    // let AddOneDay = 86400;
    // let min = parseInt("1");
    // let max = parseInt("12");

    // console.log("Now", monthOfTodaysDate);

    // console.log("Before6Month", monthOfTodaysDate - 4);

    //sixMonths.setMonth(new Date().getMonth()+1 - 6);
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

  // const rateData = {
  //   // necessary data to set up the chart from Chart.js
  //   labels: chartData.labels,
  //   datasets: [
  //     {
  //       label: "SEK / USD",
  //       base: select1,
  //       backgroundColor: "rgba(245, 150, 20, 0.5)",
  //       borderColor: "#003F5C",
  //       borderWidth: 2,
  //       data: chartData.values,
  //     },
  //   ],
  // }; // CHART.JS docs for more info about the syntax

  return (
    <div>
      <Line
        data={rateData}
        width={600}
        height={400}
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
    </div>
  );
};

export default Chart;
