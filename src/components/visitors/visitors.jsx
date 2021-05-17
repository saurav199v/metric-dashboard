import React from 'react';

import '../visitors/visitors.css';
import { Bar } from 'react-chartjs-2';


const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 32, 40, 65, 59, 80, 22, 44, 55, 40, 81, 56, 20, 40, 65, 59, 80, 59, 80, 81, 56, 55, 81, 56, 55, 40, 81],
        backgroundColor: '#0d65d9',
        borderWidth: 0,
        barThickness: 15
    }]
};

const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false
            },
          
            barPercentage: 3
        },
        y: {
            grid: {
                color: 'rgb(235 238 244)'
            },
            position: 'right',
            ticks: {
                min: 1,
                max: 90,
                stepSize: 30,
                suggestedMin: 0,
                suggestedMax: 90,
                callback: function (label, index, labels) {
                    switch (label) {
                        case 30:
                            return '3k';
                        case 60:
                            return '6k';
                        case 90:
                            return '9k';

                    }
                }
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {

            display: false
        },
        tooltip: {
            backgroundColor:'#ffffff',
            
            bodyColor: '#4c4d51',
         
            titleFontColor: '#0a0a0a',
            caretSize: "10",
            cornerRadius: '10',
            callbacks: {
                title : function(context){
                    
                        return context[0].label+" Januray";
                },
                label: function (context) {
                    var label = "Visitors";

                     
                    return label;
                },
                afterLabel : function(context){
                        
                    return context.dataset.data[context.dataIndex];
                },titleFontColor: function(context) {
                    return 'black';
                }
            }
        }
    }

}

function generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 5;
    var years = []

    for (var i = max; i >= min; i--) {
        years.push(i)
    }
    return years
};

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
const years = generateArrayOfYears();
export default function Visitors() {

    return (
        <div className="visitors-container">
            <div className="visitors-header-container">
                <div className="visitors-header-label">Daily Visitors</div>
                <div>
                    <span className="visitors-month">
                        <select>
                            {months.map((month,index) => {

                                return <option key={index}> {month} </option>
                            })


                            }
                        </select>

                    </span>
                    <span>
                        <select>
                            {years.map((year,index) => {

                                return <option key={index}> {year} </option>
                            })


                            }
                        </select>

                    </span>
                </div>
            </div>
            <div className = "visitors-chart">
                <Bar data={data} options={options}></Bar>
            </div>
        </div>

    )

}