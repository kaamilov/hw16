import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

// import { Component } from "react";

// export default class Expenses extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedYear: "",
//     };
//   }
//   render() {
//     console.log(this.props);
//     const selectChangeHandler = ({ target: { value } }) => {
//       this.state.selectedYear(value);
//     };
//  getCurrentExpenses = () => {
//       if (this.state.selectedYear === "All") {
//         return this.props.expenses;
//       }
//       return this.props.expenses.filter((expense) => {
//         return (
//           expense.date.getFullYear().toString() === this.state.selectedYear
//         );
//       });
//     };
//  const renderedExpenses = this.getCurrentExpenses();
//     return (
//       <Card className="expenses">
//         <ExpensesChart expenses={this.renderedExpenses} />
//         <ExpensesFilter
//           selectedYear={this.state.selectedYear}
//           onChangeSelectedYear={selectChangeHandler}
//         />
//         <ExpensesList expenses={this.renderedExpenses} />
//       </Card>
//     );
//   }
// }

function Expenses({ expenses }) {
	const [selectedYear, setSelectedYear] = useState('All')

	const selectChangeHandler = ({ target: { value } }) => {
		setSelectedYear(value)
	}
	const getCurrentExpenses = () => {
		if (selectedYear === 'All') {
			return expenses
		}
		return expenses.filter((expense) => {
			return expense.date.getFullYear().toString() === selectedYear
		})
	}
	const renderedExpenses = getCurrentExpenses()

	return (
		<Card className='expenses'>
			<ExpensesChart expenses={renderedExpenses} />
			<ExpensesFilter
				selectedYear={selectedYear}
				onChangeSelectedYear={selectChangeHandler}
			/>
			<ExpensesList expenses={renderedExpenses} />
		</Card>
	)
}

export default Expenses
