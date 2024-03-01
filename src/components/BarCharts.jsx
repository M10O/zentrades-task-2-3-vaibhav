import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarCharts = ({ charts }) => {
  return (
    <div>
      {charts.map((chart, index) => (
        <div key={index}>
          <h2>{chart.title}</h2>
          <h3>{chart.heading}</h3>
          <Bar
            data={{
              labels: chart.y,
              datasets: [
                {
                  label: chart.heading,
                  data: chart.x,
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  type: 'category',
                  beginAtZero: true,
                },
                y: {
                  type: 'linear',
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BarCharts;
