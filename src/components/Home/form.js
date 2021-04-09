import React from "react";

const Form = ({ setDoughnut, doughnut }) => {
  function addNewCurrency(e) {
    e.preventDefault();
    let labels = e.target[0].value.toUpperCase();
    let amount = parseInt(e.target[1].value);
    let date = e.target[2].value;

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
    <form onSubmit={addNewCurrency} className="dashboard-form">
      {" "}
      {/* Form for savings in different currencies */}
      <input type="text" name="currencyCode" placeholder="Currency" />
      <input type="number" name="amount" placeholder="Amount" />
      <input type="date" name="date" />
      <button className="dashboard-add-btn">Add</button>
    </form>
  );
};

export default Form;
