import "./ExpensesFilter.css";
import React, { Component } from "react";

export default class ExpensesFilter extends Component {
  render() {
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={this.props.selectedYear} onChange={this.props.onChangeSelectedYear}>
            <option value="All">Select All</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    );
  }
}

// const ExpensesFilter = ({ selectedYear, onChangeSelectedYear }) => {
// 	return (
// 		<div className='expenses-filter'>
// 			<div className='expenses-filter__control'>
// 				<label>Filter by year</label>
// 				<select value={selectedYear} onChange={onChangeSelectedYear}>
// 					<option value='All'>Select All</option>
// 					<option value='2025'>2025</option>
// 					<option value='2024'>2024</option>
// 					<option value='2023'>2023</option>
// 					<option value='2022'>2022</option>
// 				</select>
// 			</div>
// 		</div>
// 	)
// }

// export default ExpensesFilter
