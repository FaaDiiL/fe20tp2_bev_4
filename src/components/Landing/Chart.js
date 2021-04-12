import { Line } from "react-chartjs-2";

import { rates } from "../../constants/rates";

const Chart = () => {

  //BEGINNING
  const ratesData = rates[0].rates;

  const chartData = {
    labels:[],
    values:[]
  }
  Object.entries(ratesData).forEach(([x,y]) =>{
    if(x.endsWith("01")){
      chartData.labels.push(x)
      chartData.values.push(Object.values(y)[0])
    }
  }) // END
  // filters the api to only get the date that ends with 01. 
  //The first day of the month and pushes them to chartData to be used by the Chart


  const rateData = {  // necessary data to set up the chart from Chart.js
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
  }; // CHART.JS docs for more info about the syntax 

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
