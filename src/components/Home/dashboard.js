/* import { Line } from "react"; */
import { Line } from "react-chartjs-2";
import styled from "styled-components";

import { rates } from "../../constants/rates";

const StyledChart = styled.div`
  margin-top: 30px;
  width: 90%;
`;

const Chart = () => {
/*   const [apiBase, setApiBase] = useState("&base=EUR"); */

  const ratesData = Object.entries(rates[0].rates);

  let dates = [];
  let rateOfDate = [];

  for (let i = 0; i < ratesData.length; i++) {
    if (ratesData[i][0].endsWith("01")) {
      dates.push(ratesData[i][0]);
      rateOfDate.push(ratesData[i][1].USD);
    }
  }

  const rateData = {
    labels: dates,
    datasets: [
      {
        label: "SEK / USD",
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