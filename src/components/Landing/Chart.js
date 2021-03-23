/* import { useState } from "react"; */
import { Line } from "react-chartjs-2";
import { rates } from "../../constants/rates";


const Chart = () => {
  /* const [apiBase, setApiBase] = useState("&base=EUR"); */

  const ratesData = rates[0].rates;

  const chartData = {
    labels:[],
    values:[]
  }
  Object.entries(ratesData).map(([x,y]) =>{
    if(x.endsWith("01")){
      chartData.labels.push(x)
      chartData.values.push(Object.values(y)[0])
      
    }
  })
 console.log(chartData)


  const rateData = {
    labels: chartData.labels,
    datasets: [
      {
        label: "SEK / USD",
        backgroundColor: "#ecbcfd5b",
        borderColor: "#571d85",
        borderWidth: 2,
        data: chartData.values
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
