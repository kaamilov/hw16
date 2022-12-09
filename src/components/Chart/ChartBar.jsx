import "./ChartBar.css";
import React, { Component } from "react";

export default class ChartBar extends Component {
	
  render() {
	let barFillHeight = '0%'
	if (this.props.maxValue > 0) {
		barFillHeight = Math.round((this.props.value / this.props.maxValue) * 100) + '%'
	}
    return (
      <div className="chart-bar">
        {" "}
        <div className="chart-bar__inner">
          {" "}
          <div
            className="chart-bar__fill"
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-bar__label">{this.props.label}</div>
      </div>
    );
  }
}

// const ChartBar = ({ maxValue, label, value }) => {
// 	let barFillHeight = '0%'
// 	if (maxValue > 0) {
// 		barFillHeight = Math.round((value / maxValue) * 100) + '%'
// 	}
// 	return (
// 		<div className='chart-bar'>
// 			<div className='chart-bar__inner'>
// 				<div
// 					className='chart-bar__fill'
// 					style={{ height: barFillHeight }}
// 				></div>
// 			</div>
// 			<div className='chart-bar__label'>{label}</div>
// 		</div>
// 	)
// }

// export default ChartBar
