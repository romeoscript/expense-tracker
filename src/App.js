import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";
import React, {useState}from 'react';

const dummy = [

  {id: "1", title: "faith", date: new Date(2022, 9, 7), amount: 456.4 },
  {
    id: "2",
    title: "fruit table",
    date: new Date(2022, 4, 7),
    amount: 223.4,
  },
  { id: "3", title: "faith", date: new Date(2021, 9, 7), amount: 906.4 },
  { id: "4",title: "Romeo", date: new Date(2019, 19, 7), amount: 676.4 },
];
function App() {
 const  [expenses,setExpenses]= useState(dummy)
const addExpenseHandler= (extract)=>{
  setExpenses((preExpense)=>{
    return [extract,...preExpense]
  })
}
  return (
    <div className="App-header">
      <NewExpense onExtract={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
