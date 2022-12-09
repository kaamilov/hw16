import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

import React, { Component } from 'react'

export default class ExpensesList extends Component {
  render() {
	if (this.props.expenses.length === 0) {
				return <h1 className='expenses-list__fallback'>No Expense Found</h1>
			}
	return (
		<ul className='expenses-list'>
		 			{this.props.expenses.map((expense, index) => {
						return (
							<ExpenseItem
								key={index}
								expenseTitle={expense.title}
								expensePrice={expense.amount}
								expenseDate={expense.date}
							/>
						)
					})}
				</ul>
	)
  }
}

// const ExpensesList = ({ expenses }) => {
// 	if (expenses.length === 0) {
// 		return <h1 className='expenses-list__fallback'>No Expense Found</h1>
// 	}
// 	return (
// 		<ul className='expenses-list'>
// 			{expenses.map((expense, index) => {
// 				return (
// 					<ExpenseItem
// 						key={index}
// 						expenseTitle={expense.title}
// 						expensePrice={expense.amount}
// 						expenseDate={expense.date}
// 					/>
// 				)
// 			})}
// 		</ul>
// 	)
// }

// export default ExpensesList
