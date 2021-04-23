import React, { useEffect, useRef, useState } from "react";
import Collapsible from "react-collapsible";

import { withFirebase } from "../Firebase";
import { AddButton, Arrow, Button } from "./styles.js";

const Form = ({ setDoughnut, doughnut, firebase }) => {
  const amountInputField = useRef(null)
  const [latestRates, setLatestRates] = useState([]);
  const defaultDate = new Date().toISOString().substr(0, 10);
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

  function addNewCurrency(e) {
    e.preventDefault();

    

    let labels = e.target[0].value.toUpperCase();
    let amount = parseInt(e.target[1].value);
    let date = e.target[2].value;
    //to show most recent value of the a currency ----->



   

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
          let baseTotal = amount / responseDateRate; 
          let baseTotalToday = amount / todaysRate; 
  
          let currPerfomancePercentage =
            ((baseTotal - baseTotalToday) / baseTotal) * 100; //percentage
          let currPerfomanceAmount = baseTotalToday - baseTotal; //amount
  
          let id = Date.now();
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
        <Button
          onClick={handleRotate}
          className="dashboard-add-cur-btn"
          style={{ width: "100%" }}
        >
          Add Savings
          <Arrow className={arrowRotate ? "active" : ""} />
        </Button>
      }
    >
      <form
        onSubmit={addNewCurrency}
        className="dashboard-form"
        onKeyDown={handleKeyDown}
      >
        {/* Form for savings in different currencies */}
        <select name="currencyCode">
          {Object.entries(latestRates).map((curCode, index) => (
            <option key={index}>{curCode[0]}</option>
          ))}
        </select>
        <input type="number" name="amount" placeholder="Amount" ref={amountInputField} />
        <input type="date" name="date" defaultValue={defaultDate} />
        <AddButton>+</AddButton>
      </form>
    </Collapsible>
  );
};

export default withFirebase(Form);
