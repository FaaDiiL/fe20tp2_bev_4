import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const StyledChart = styled.div`
  margin-top: 30px;
  width: 90%;
`;

const Chart = ({ curCode, base }) => {
  const URL = `https://api.exchangerate.host/timeseries?symbols=${curCode}&start_date=2020-01-01&end_date=2020-07-01&base=${base}`;

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, [base, curCode]);

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
        backgroundColor: "#ecbcfd5b",
        borderColor: "#571d85",
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
            fontSize: 14,
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
