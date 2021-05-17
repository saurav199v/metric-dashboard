import React from 'react';

import '../visitedPage/visitedPage.css';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
  
    datasets: [
      { 
       label : "",
        data: [15,12,18,17, 19,13,19, 20,28,27,29],
        fill: true,
        backgroundColor: 'rgb(31 111 219 / 20%)',
        borderColor: 'rgb(31 111 219)',
        "borderJoinStyle" : "round"
      },
    ],
  };
  
  const options = {
    plugins : {legend: {
  
      display : false
    }},
     "pointRadius" :0,
     "borderJoinStyle" : "round",
     scales: {
      
      x: {
        display:false
      },
      y: {
        display:false
      }
    }
  };
export default function VisitedPage() {

    return (
        <div className="visited-page-parent-container">
            <h2>Most Visited Pages</h2>
            <div class="visited-page-container visted-page-header" >


                <span>Page Name</span>
                <span>Visitors</span>
                <span>Unique Page Visits</span>
                <span>Bounce Rate</span>
            </div>

            <div class="visited-page-container ">

                <div class="visited-page-row-container ">
                    <span>/store/</span><span class = "visited-page-icon"><OpenInNewIcon fontSize="small" /></span>
                    </div>
                <span>4,890</span>
                <span>3,985</span>
                <div class = "visited-page-row-graph-container">
                   <span>81.56%</span>
                   <div class= "visited-page-graph"> <Line data={data} options={options} /></div>
                </div>
                

            </div>
            <div class="visited-page-container ">
            <div class="visited-page-row-container ">
            <span>/store/symbols-styleguides</span><span class = "visited-page-icon"><OpenInNewIcon fontSize="small" /></span>
                    </div>
               
                <span>3,785</span>
                <span>3,182</span>
                <div class = "visited-page-row-graph-container">
                    <span>62.56%</span>
                    <div class= "visited-page-graph"> <Line data={data} options={options} /></div>
                </div>
            </div>

            <div class="visited-page-container">
            <div class="visited-page-row-container ">
            <span>/store/dashboard-ui-kit</span><span class = "visited-page-icon"><OpenInNewIcon fontSize="small" /></span>
                    </div>
               
                <span>2,985</span>
                <span>2,115</span>
                <div class = "visited-page-row-graph-container">
                <span>58.76%</span>
                <div class= "visited-page-graph"> <Line data={data} options={options} /></div>
                </div>
                
            </div>

            <div class="visited-page-container">
            <div class="visited-page-row-container ">
            <span>/store/webflow-cards.html</span><span class = "visited-page-icon"><OpenInNewIcon fontSize="small" /></span>
                    </div>
               
                
                <span>2,440</span>
                <span>1,789</span>
                <div class = "visited-page-row-graph-container">
                <span>39.59%</span>
                <div class= "visited-page-graph"> <Line data={data} options={options} /></div>
                </div>
               
            </div>


        </div>




    )

}