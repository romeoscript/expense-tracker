import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  // const dating = new Date()
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  // const mine = dating.toLocaleString('en-US', {month :'long'});
  // console.log(mine)
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day ">{day}</div>
    </div>
  );
};

export default ExpenseDate;
