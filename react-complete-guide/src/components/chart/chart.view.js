import React from "react";
import ChartBar from "./chartBar";
import "./chart.styles.css";

export function Chart(props) {
  const chartDataPointsValue = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...chartDataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
