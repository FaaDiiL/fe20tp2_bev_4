// import { rates } from "../../constants/rates";
import { Line } from "react-chartjs-2";

const Chart = ({ currencyCode, select1 = "SEK", rates, todaysDate }) => {
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

  fetch(
    `https://api.exchangerate.host/timeseries?base=${select1}start_date=${calculateSixMonthBefore()}&end_date=${todaysDate}`
  )
    .then((res) => res.json())
    .then((data) => console.log("test: ", data));

  const ratesData = {
    base: "EUR",
    rates: {
      "2020-01-01": {
        USD: 1.1221,
        AUD: 1.5993,
        EUR: 1,
      },
      "2020-01-02": {
        USD: 1.1221,
        AUD: 1.5982,
        EUR: 1,
      },
      "2020-02-01": {
        USD: 1.1171,
        AUD: 1.5994,
        EUR: 1,
      },
      "2020-03-01": {
        USD: 1.1171,
        AUD: 1.5994,
        EUR: 1,
      },
    },
  };

  // console.log(Object.entries(rates));
  calculateSixMonthBefore();
  Object.entries(ratesData.rates).forEach(([x, y]) => {
    if (x.endsWith("01")) {
      console.log(` ${""}`);
      console.log(Object.values(y)[0]);
    }
  });

  const chartData = {
    labels: [],
    values: [],
  };
  Object.entries(ratesData.rates).forEach(([x, y]) => {
    if (x.endsWith("01")) {
      chartData.labels.push(x);
      chartData.values.push(Object.values(y)[0]);
    }
  }); // END
  // filters the api to only get the date that ends with 01.
  //The first day of the month and pushes them to chartData to be used by the Chart
  // console.log(chartData);
  // console.log(ratesData);

  const newRateData = {
    // necessary data to set up the chart from Chart.js
    labels: chartData.labels,
    datasets: [
      {
        label: `${select1} To ${currencyCode}`,
        base: ratesData.base,
        backgroundColor: "rgba(245, 150, 20, 0.5)",
        borderColor: "#003F5C",
        borderWidth: 2,
        data: chartData.values,
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
        data={newRateData}
        width={600}
        height={400}
        options={{
          title: {
            display: true,
            text: "Fluctuations over time",
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
