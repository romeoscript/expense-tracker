import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2018");
  const filteredChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };
  const filteredExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense}/>
      {filteredExpense.length === 0?<p> Found no Expense</p> :filteredExpense.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
    
        />
      ))}
    </div>
  );
};

export default Expenses;
