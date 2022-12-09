import "./ExpenseDate.css";
import React, { Component } from "react";

export default class ExpenseDate extends Component {
  
  render() {
    const month = this.props.date.toLocaleString("en-US", { month: "long" });
  const day = this.props.date.toLocaleString("en-US", { day: "2-digit" });
  const year =this.props.date.getFullYear();
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
  }
}

// function ExpenseDate(props) {
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//   const year = props.date.getFullYear();
//   return (
//     <div className="expense-date">
//       <div className="expense-date__month">{month}</div>
//       <div className="expense-date__year">{year}</div>
//       <div className="expense-date__day">{day}</div>
//     </div>
//   );
// }

// export default ExpenseDate;
