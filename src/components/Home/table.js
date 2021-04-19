import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function Table({ doughnut, setDoughnut, totalAmount, setTotalAmount, firebase }) {
  const [graph, setGraph] = useState(null);
  const [percentButton, setPercentButton] = useState(false);

  const handleSwitch = () => {
    setPercentButton(!percentButton);
  };


  useEffect(() => {
    let newTotalAmount = doughnut.map((cur) => cur.baseTotal);
    let addedTotal = newTotalAmount.reduce((a, b) => a + b);
    setTotalAmount(addedTotal);
    showTable()
  }, [doughnut,setTotalAmount]);



  function showTable(){
      // This is the structure for every item in the list of savings
      return doughnut.map((cur, index) => (
        <li onClick={() => showLineChart(cur.labels, index)} key={index}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Box display="flex" justify="space-between">
                <span>{`${cur.labels} ${cur.amount}`}</span>
                <span style={{ textAlign: "center" }}>
                  {Math.round((cur.baseTotal * 100) / 100).toFixed(2)} kr
                </span>
                <span className={Math.sign(cur.currPerfomanceAmount) ===(-1)? 'down': 'up'}>
                  {percentButton
                    ? cur.currPerfomancePercentage.toFixed(2) + "%"
                    : parseInt(cur.currPerfomanceAmount) + "kr"}
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} xl={3}>
            <div>
              {graph && graph[index] && (
                <Line
                  height={250}
                  data={graph[index]}
                  options={{
                    
                    legend: {
                      display: true,
                      position: "top",
                    },
                  }}
                />
              )}
            </div>
            </Grid>
          </Box>
        </li>
      ))
  }

  function showLineChart(label, index) {
    let today = new Date().toISOString().substr(0, 10);
    let sixMonths = new Date();
    sixMonths.setMonth(new Date().getMonth() - 6);

    sixMonths = sixMonths.toISOString().substr(0, 10);
    if (graph && graph[index]) {
      setGraph();
    } else {
      fetch(
        `https://api.exchangerate.host/timeseries?symbols=${label}&start_date=${sixMonths}&end_date=${today}&base=SEK`
      )
        .then((data) => data.json())
        .then((data) => {
          let graphData = [];
          let graphLabels = [];
          let iteration = 0;
          Object.entries(data.rates).forEach(([key, value]) => {
            if (iteration % 10 === 0) {
              graphLabels.push(key);
              graphData.push(value[label]);
            }
            iteration++;
          });
          let graphDataSet = [];
          graphDataSet[index] = {
            labels: graphLabels,
            datasets: [
              {
                label: `SEK / ${label}`,
                backgroundColor: "rgba(245, 150, 20, 0.5)",
                borderColor: "#003F5C",
                borderWidth: 2,
                data: graphData,
              },
            ],
          };
          setGraph(graphDataSet);
        });
    }
  }

  return (
    <Grid container>
      <ul>
        <li>
          <span className="first">Savings</span>
          <span className="first" style={{ textAlign: "right" }}>
            Total: {(Math.round(totalAmount * 100) / 100).toFixed(2)} kr
          </span>
        </li>
        <li>
          <span className="first"></span>
          <span className="first" style={{ textAlign: "right" }}>
            <button onClick={handleSwitch} style={{ padding: "5px" }}>
              % / kr
            </button>
          </span>
        </li>
          {showTable()}
        
      </ul>
    </Grid>
  );
}

export default Table;
