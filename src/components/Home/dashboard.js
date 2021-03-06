import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { StyledChart } from "./styles.js";

const Chart = ({ curCode, base }) => {
  const URL = `https://api.exchangerate.host/timeseries?symbols=${curCode}&start_date=2020-01-01&end_date=2020-07-01&base=${base}`;

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, [base, curCode, URL]);

  const ratesData = Object.entries(rates);

  let dates = [];
  let rateOfDate = [];

  for (let i = 0; i < ratesData.length; i++) {
    if (ratesData[i][0].endsWith("01")) {
      dates.push(ratesData[i][0]);
      rateOfDate.push(ratesData[i][1][curCode]);
    }
  }

  const rateData = {
    labels: dates,
    datasets: [
      {
        label: `${base} / ${curCode}`,
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
        width={600}
        height={400}
        options={{
          title: {
            display: true,
            text: "Fluctuations over time",
            fontSize: 16,
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
