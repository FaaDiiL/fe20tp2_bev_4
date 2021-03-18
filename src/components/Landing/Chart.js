import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { rates } from "../../constants/rates";

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [apiBase, setApiBase] = useState("&base=EUR");
  const [drawData, setDrawData] = useState([]);

  const ratesArr = rates;

  useEffect(() => {
    setDrawData([ratesArr[0].rates]);

    const newDrawData = (drawData[0])
    console.log(newDrawData)
  }, []);
  console.log(drawData[0])
 /*  console.log(Object.keys(newDrawData)); */
  /*   const API_URL =
    "https://api.exchangerate.host/timeseries?symbols=USD&start_date=2020-01-01&end_date=2020-07-01";

  useEffect(() => {
    axios
      .request(API_URL + apiBase)
      .then((response) => setChartData(response.data.rates))
      .catch((error) => console.error(error));
  }, []); */

  // useEffect(() => {
  //   console.log("från onurs fetch")
  //   fetch("http://data.fixer.io/api/2013-12-24?access_key=fd4a8fdd5b24307002c1bea2c63f14f0&GBP")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  const rateData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "SEK / EUR",
        backgroundColor: "#ecbcfd5b",
        borderColor: "#571d85",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 59, 30, 50, 120, 23, 12, 80, 81, 56, 43, 0],
      },
      {
        label: "SEK / USD",
        backgroundColor: "#c229294b",
        borderColor: "#c22929",
        borderWidth: 2,
        data: [12, 63, 32, 23, 63, 43, 40, 59, 80, 81, 56, 43, 30],
      },
    ],
  };

  return (
    <div>
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
    </div>
  );
};

export default Chart;