import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const changeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };
  const changeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };
  const changeDate = (event) => {
    setEnteredDate(event.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();

    const extractData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    props.onSaveEvent(extractData)
    console.log(extractData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" onChange={changeTitle} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step='0.01' value={enteredAmount} onChange={changeAmount} />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2020-09-07"
            max="2025-09-07"
            onChange={changeDate}
            value={enteredDate}
          />
        </div>
        <div className="new-expense-actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
