import "./Chart.css";
import ChartBar from "./ChartBar";

import React, { Component } from "react";

export default class Chart extends Component {
  render() {
	const dataPointsValues = this.props.dataPoints.map((point) => point.value)
		const totalMax = Math.max(...dataPointsValues)
    return (
      <div className="chart">
        {this.props.dataPoints.map((point, index) => (
          <ChartBar
            key={index}
            maxValue={totalMax}
            label={point.label}
            value={point.value}
          />
        ))}
      </div>
    );
  }
}

// const Chart = ({ dataPoints  }) => {
// 	const dataPointsValues = dataPoints.map((point) => point.value)
// 	const totalMax = Math.max(...dataPointsValues)
// 	return (
// 		<div className='chart'>
// 			{dataPoints.map((point, index) => (
// 				<ChartBar
// 					key={index}
// 					maxValue={totalMax}
// 					label={point.label}
// 					value={point.value}
// 				/>
// 			))}
// 		</div>
// 	)
// }

// export default Chart
