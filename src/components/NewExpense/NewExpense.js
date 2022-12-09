import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { Component } from 'react'

export default class NewExpense extends Component {
  render() {
    const saveExpenseDataHandler = (enteredExpense) => {
          const expenseData = {
            ...enteredExpense,
            id: Math.random().toString(),
          };
          this.props.onAddExpense(expenseData);
        };
    return (
      <div className="new-expense">
             <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
           </div>
    )
  }
}

// function NewExpense(props) {
//   // console.log(props.title);

//   // props = {
//   //   title: "Hello",
//   //   onAddExpense: function addExpenseHandler() {
//   //     console.log(expense);
//   //   },
//   // };

//   const saveExpenseDataHandler = (enteredExpense) => {
//     const expenseData = {
//       ...enteredExpense,
//       id: Math.random().toString(),
//     };
//     props.onAddExpense(expenseData);
//   };

//   return (
//     <div className="new-expense">
//       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
//     </div>
//   );
// }

// export default NewExpense;
