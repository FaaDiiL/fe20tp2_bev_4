import React, { useEffect, useState } from "react";

function Table({ doughnut, totalAmount, setTotalAmount }) {
  useEffect(() => {
    let newTotalAmount = doughnut.map((cur) => cur.baseTotal);
    let addedTotal = newTotalAmount.reduce((a, b) => a + b);
    setTotalAmount(addedTotal);
  }, [doughnut, setTotalAmount]);

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
    </ul>
  );
}

export default Table;
