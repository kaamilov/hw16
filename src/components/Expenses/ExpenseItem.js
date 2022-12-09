import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import { Component } from "react";

export default class ExpenseItem extends Component {
  render() {
    return (
      <Card className="expense-item">
        <ExpenseDate date={this.props.expenseDate} />
        <div className="expense-item__description">
          <h2>{this.props.expenseTitle}</h2>
          <div className="expense-item__price">${this.props.expensePrice}</div>
        </div>
      </Card>
    );
  }
}

// function ExpenseItem(props) {
// 	return (
// 		<Card className='expense-item'>
// 			<ExpenseDate date={props.expenseDate} />
// 			<div className='expense-item__description'>
// 				<h2>{props.expenseTitle}</h2>
// 				<div className='expense-item__price'>${props.expensePrice}</div>
// 			</div>
// 		</Card>
// 	)
// }

// export default ExpenseItem
