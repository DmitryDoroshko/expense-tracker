import React from "react";
import "./Chart.css";
import ChartBar from "./../ChartBar/ChartBar";

export default function Chart(props) {
    const { dataPoints } = props;

    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);

    const maxValue = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
}
