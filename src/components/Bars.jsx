import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./Bars.css"; 


const Bars = ({ data }) => {
  const chartSettings = {
    xAxis: [
      {
        label: data.title,
      },
    ],
  };

  return (
    <div className="bars-container">
      <h2 className="chart-title"><strong>{data.title}</strong></h2>
      <div className="bar-chart-wrapper">
        <BarChart
          width={500}
          height={300}
          dataset={data.series}
          yAxis={[{ scaleType: "band", dataKey: "x" }]}
          series={[{ dataKey: "y", color: "#EE5566" }]}
          layout="horizontal"
          {...chartSettings}
        />
      </div>
    </div>
  );
};

export default Bars;
