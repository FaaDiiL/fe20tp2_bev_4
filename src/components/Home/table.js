import React, { useEffect } from "react";

function Table({ doughnut, totalAmount, setTotalAmount }) {
  useEffect(() => {
    let newTotalAmount = doughnut.map((cur) => cur.baseTotal);
    let addedTotal = newTotalAmount.reduce((a, b) => a + b);
    console.log(doughnut);
    /* let result = doughnut. */

    doughnut.reduce((acc, { labels, amount, date, responseDateRate }) => {
      /*  USD[
      ({
        labels: "USD",
        amount: amount,
        ratesOnDate: responseDateRate,
        baseTotal: 4700,
        date: "2020-01-03",
        labels: "USD",
      }, */
      acc[labels] = acc[labels] || {};
      acc[date][amount][responseDateRate] = null;

      console.log(acc[labels]);

      return acc;
    }, {});

    setTotalAmount(addedTotal);
  }, [doughnut, setTotalAmount]);

  //c[v.company] = c[v.company] || {}; //Init if company property does not exist
  // c[v.company][v.country] = c[v.company][v.country] || {}; //Init if country property does not exist
  //c[v.company][v.country][v.employee] = null; //Add employee property with null value
  /* 
  let arr = [
    { company: "Google", country: "USA", employee: "John" },
    { company: "Amazon", country: "UK", employee: "Arya" },
    { company: "Google", country: "KSA", employee: "Cersi" },
    { company: "Amazon", country: "USA", employee: "Tyrion" },
    { company: "Amazon", country: "USA", employee: "Daenarys" },
    { company: "Google", country: "KSA", employee: "Dothrokhi" },
  ]; */

  /*   [
    USD[
      ({
        labels: "USD",
        amount: 500,
        ratesOnDate: 0.8532,
        baseTotal: 4700,
        date: "2020-01-03",
        labels: "USD",
      },
      {
        labels: "USD",
        amount: 500,
        ratesOnDate: 0.8532,
        baseTotal: 4700,
        date: "2020-01-03",
      })
    ],
    EUR[
      ({
        labels: "EUR",
        amount: 500,
        ratesOnDate: 0.8532,
        baseTotal: 4700,
        date: "2020-01-03",
        labels: "USD",
      },
      {
        labels: "EUR",
        amount: 500,
        ratesOnDate: 0.8532,
        baseTotal: 4700,
        date: "2020-01-03",
      })
    ],
  ]; */

  return (
    <ul>
      <li>
        {" "}
        {/* Shows the savings in a list */}
        <span className="first">Savings</span>
        <span className="first" style={{ textAlign: "right" }}>
          {" "}
          Total: {(Math.round(totalAmount * 100) / 100).toFixed(2)} kr
        </span>
      </li>
      {
        // This is the structure for every item in the list of savings
        doughnut.map((cur, index) => (
          <li key={index}>
            <span className="first"> {`${cur.labels} ${cur.amount}`}</span>
            <span>{Math.round((cur.baseTotal * 100) / 100).toFixed(2)} kr</span>
            <span className="up">12%</span>
          </li>
        ))
      }
      {console.log(doughnut)}
    </ul>
  );
}

export default Table;
