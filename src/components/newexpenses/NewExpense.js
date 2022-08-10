import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveData= (formPushUp) =>{
    const expenseData = {
      ...formPushUp,
      id:Math.random().toString()
    }
    props.onExtract(expenseData)
    console.log(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveEvent={saveData}/>
    </div>
  )
}

export default NewExpense