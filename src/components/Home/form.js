import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import { Button, Arrow } from "./styles.js";

const Form = ({ setDoughnut, doughnut }) => {
  const [latestRates, setLatestRates] = useState([]);
  const [defaultDate, setDefaultDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [arrowRotate, setArrowRotate] = useState(false);

  const handleRotate = () => {
    setArrowRotate(!arrowRotate);
  };

  useEffect(() => {
    const newDate = new Date().toISOString().split("T")[0];
    if (localStorage.getItem(newDate)) {
      setLatestRates(JSON.parse(localStorage.getItem(newDate)));
    }
  }, []);

  const handleKeyDown = (e) => {
    ["-", "+", "e", "E"].includes(e.key) && e.preventDefault();
  };
  console.log("latest Rates ", latestRates);

  function addNewCurrency(e) {
    e.preventDefault();
    let labels = e.target[0].value.toUpperCase();
    let amount = parseInt(e.target[1].value);
    let date = e.target[2].value;
    setDefaultDate(date);
    //to show most recent value of the a currency ----->

    //------------>

    fetch(
      `https://api.exchangerate.host/timeseries?symbols=${labels}&start_date=${date}&end_date=${date}&base=SEK`
    )
      .then((res) => res.json())
      .then((data) => {
        let responseDateRate = data.rates[date][labels];
        let todaysRate = Object.entries(latestRates)
          .filter((cur) => cur[0] === labels)
          .map((a) => a[1])
          .toString();
        let baseTotal = amount / responseDateRate; //100kr
        let baseTotalToday = amount / todaysRate; //80kr

        let currPerfomancePercentage =
          ((baseTotal - baseTotalToday) / baseTotal) * 100; //percentage
        let currPerfomanceAmount = baseTotalToday - baseTotal; //amount
        console.log("prisutvecklingen ", currPerfomancePercentage, "%");
        console.log("prisutvecklingen ", currPerfomanceAmount, "kr");

        let id = Date.now();
        console.log("Todays ", todaysRate);
        setDoughnut([
          ...doughnut,
          {
            labels,
            amount,
            date,
            responseDateRate,
            baseTotal,
            id,
            currPerfomancePercentage,
            currPerfomanceAmount,
            baseTotalToday,
          },
        ]);
      });
  }

  return (
    <Collapsible
      trigger={
        <Button onClick={handleRotate} className="dashboard-add-cur-btn">
          Add Currency
          <Arrow className={arrowRotate ? "active" : ""} />
        </Button>
      }
    >
      <form
        onSubmit={addNewCurrency}
        className="dashboard-form"
        onKeyDown={handleKeyDown}
      >
        {" "}
        {/* Form for savings in different currencies */}
        <select name="currencyCode">
          {Object.entries(latestRates).map((curCode, index) => (
            <option key={index}>{curCode[0]}</option>
          ))}
        </select>
        <input type="number" name="amount" placeholder="Amount" />
        <input type="date" name="date" defaultValue={defaultDate} />
        <Button className="dashboard-add-btn">Add</Button>
      </form>
    </Collapsible>
  );
};

export default Form;
