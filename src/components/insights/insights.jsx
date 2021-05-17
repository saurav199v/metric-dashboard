import React from 'react';

import '../insights/insights.css';
import { Line } from 'react-chartjs-2';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { red } from '@material-ui/core/colors';



function InsightsData(label, data, backgroundColor, borderColor, trend, percentage, count) {
  this.label = label;
  this.data = data;
  this.backgroundColor = backgroundColor;
  this.borderColor = borderColor;
  this.trend = trend;
  this.percentage = percentage;
  this.count = count;
}
const insights = [];

insights.push(new InsightsData("realtime users", [29, 12, 18, 17, 19, 13, 19, 15, 14, 9, 8, 11, 29], 'rgb(31 111 219 / 20%)', 'rgb(31 111 219)', "up", "+9.6%", '56'));
insights.push(new InsightsData("total visits", [6, 10, 12, 18, 25, 12, 13, 19, 12, 11, 18, 22, 16], '#ebf6ed', '#34ad44', "down", "-11.9%", '54,598'));
insights.push(new InsightsData("bounce rate", [20, 29, 18, 17, 19, 13, 19, 10, 11, 10, 8, 9, 18], 'rgb(31 111 219 / 20%)', 'rgb(31 111 219)', "up", "+73.67%", '73.67%'));
insights.push(new InsightsData("visit duration", [6, 12, 18, 17, 19, 13, 19, 10, 11, 18, 12, 29], '#fefaef', '#fbd66c', "up", "+19.6%", '1m 4s'));



function getchartData(insight) {
  let data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],

    datasets: [
      {
        label: "",
        data: insight.data,
        fill: true,
        backgroundColor: insight.backgroundColor,
        borderColor: insight.borderColor,
        borderJoinStyle: "round"
      },
    ],
  };

  return data;

}
const options = {
  plugins: {
    legend: {

      display: false
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  "pointRadius": 0,
  "borderJoinStyle": "round",
  scales: {

    x: {
      display: false
    },
    y: {
      display: false
    }
  }
};

export default function Insights() {

  return (
    <div class="insights-parent">
      {
        insights.map(insight =>
          <div class="insights-container insights-align-center" >
            <div className="insights-inner-container">
              <div className="insights-realtime"> {insight.label}</div>
              <div className="insights-realtime-count">{insight.count}</div>
              <div className={`insights-realtime-percentage-container , ${insight.trend === 'up' ? 'insights-realtime-percentage-green' : 'insights-realtime-percentage-red'}`}>
                <span>{insight.percentage}</span>
                <span className="insights-trend-icon">
                  {insight.trend === 'up' ? <TrendingUpIcon fontSize="medium"></TrendingUpIcon> : <TrendingDownIcon fontSize="medium" ></TrendingDownIcon>}</span>
              </div>
              <div className="insights-line-chart">
                <Line data={getchartData(insight)} options={options} />
              </div>
            </div>
          </div>)
      }
    </div>
  )

}