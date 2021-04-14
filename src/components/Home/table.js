import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function Table({ doughnut, totalAmount, setTotalAmount }) {
  const [graph, setGraph] = useState(null);
  const [percentButton, setPercentButton] = useState(false);
  // const [duplicates, setDuplicates] = useState([]);

  const handleSwitch = () => {
    setPercentButton(!percentButton);
  };
  console.log(percentButton);

  useEffect(() => {}, []);

  useEffect(() => {
    let newTotalAmount = doughnut.map((cur) => cur.baseTotal);
    let addedTotal = newTotalAmount.reduce((a, b) => a + b);
    setTotalAmount(addedTotal);

    // USD: [
    //   {
    //     amount: 213,
    //     date: 213,
    //     id: 213,
    //   },
    //   {
    //     amount: 213,
    //     date: 213,
    //     id: 213,
    //   },
    //   {
    //     amount: 213,
    //     date: 213,
    //     id: 213,
    //   },
    // ];

    // doughnut.map((cur) => {
    //   // if (!duplicates.includes(cur.labels)) {
    //   let label = cur.labels;
    //   let amount = cur.amount;
    //   let date = cur.date;
    //   let id = cur.id;
    //   let responseDateRate = cur.responseDateRate;
    //   setDuplicates([...duplicates, { amount, date, id, responseDateRate }]);
    //   // }
    //   console.log("Duplicates = ", duplicates);
    //   console.log("Donut= ", doughnut);
    // });
    //

    // var defaultsettings = {
    //   ajaxsettings: { ak1: "v1", ak2: "v2" },
    //   uisettings: { ui1: "v1", ui22: "v2" },
    // };
    // .reduce((acc, curr) => {
    //   console.log(acc.date);
    //   console.log(curr.date);

    //   return acc;
    // });

    /* doughnut.map((cur) => {
      if (cur.labels > 1) {
        setDuplicates([(cur.labels: { ID: cur.id, Date: cur.date })]);
      }
    }); */

    // console.log(duplicates);
  }, [doughnut, setTotalAmount]);

  function showLineChart(label, index) {
    console.log({ label });
    let today = new Date().toISOString().substr(0, 10);
    let sixMonths = new Date();
    sixMonths.setMonth(new Date().getMonth() - 6);

    sixMonths = sixMonths.toISOString().substr(0, 10);
    console.log(today, sixMonths);
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
            // First day in month use: key.endsWith("01")
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
          console.log({ graphDataSet });
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

        {
          // This is the structure for every item in the list of savings
          doughnut.map((cur, index) => (
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
                    <span className="up">
                      {percentButton
                        ? cur.currPerfomancePercentage + "%"
                        : cur.currPerfomanceAmount + "kr"}
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12} minHeight="100">
                  {graph && graph[index] && (
                    <Line
                      data={graph[index]}
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
                  )}
                </Grid>
              </Box>
            </li>
          ))
        }
      </ul>
    </Grid>
  );
}

export default Table;
