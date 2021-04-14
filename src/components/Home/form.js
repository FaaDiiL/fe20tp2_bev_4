import React, { useState } from "react";
import Collapsible from "react-collapsible";

import { Arrow, Button } from "./styles.js";

const Form = ({ setDoughnut, doughnut }) => {
  // const [latestRates, setLatestRates] = useState();
  const [defaultDate, setDefaultDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [arrowRotate, setArrowRotate] = useState(false);

  const handleRotate = () => {
    setArrowRotate(!arrowRotate);
  };
  console.log(arrowRotate);

  function addNewCurrency(e) {
    e.preventDefault();
    let labels = e.target[0].value.toUpperCase();
    let amount = parseInt(e.target[1].value);
    let date = e.target[2].value;
    setDefaultDate(date);

    //to show most recent value of the a currency ----->
    const getCachedLatestRates = () => {
      const newDate = new Date().toISOString().split("T")[0];
      if (localStorage.getItem(newDate)) {
        console.log(JSON.parse(localStorage.getItem(newDate)));
      }
    };
    getCachedLatestRates();
    //------------>

    fetch(
      `https://api.exchangerate.host/timeseries?symbols=${labels}&start_date=${date}&end_date=${date}&base=SEK`
    )
      .then((res) => res.json())
      .then((data) => {
        let responseDateRate = data.rates[date][labels];

        let baseTotal = amount / responseDateRate;
        let id = Date.now();

        setDoughnut([
          ...doughnut,
          { labels, amount, date, responseDateRate, baseTotal, id },
        ]);
      });
  }
  return (
    <Collapsible
      trigger={
        <Button onClick={handleRotate} className="dashboard-add-cur-btn" style={{width: '100%'}}>
          Add Currency
          <Arrow className={arrowRotate ? "active" : ""} />
        </Button>
      }
    >
      <form onSubmit={addNewCurrency} className="dashboard-form">
        {" "}
        {/* Form for savings in different currencies */}
        <input type="text" name="currencyCode" placeholder="Currency" />
        <input type="number" name="amount" placeholder="Amount" />
        <input type="date" name="date" defaultValue={defaultDate} />
        <Button className="dashboard-add-btn">Add</Button>
      </form>
    </Collapsible>
  );
};

export default Form;
