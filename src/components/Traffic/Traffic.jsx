import React from 'react';

import '../Traffic/traffic.css';




export default function Traffic() {

    return (
        <div className="traffic-parent-container">
            <h2>Social Media Traffic</h2>
            <div class="traffic-container traffic-header" >


                <span>Network</span>
                <span>Visitors</span>

            </div>

            <div class="traffic-container ">


                <span>Instagram</span>

                <div class="traffic-bar-container">
                    <span>3,550</span>
                    <div  class = "traffic-progress-container"> 
                    <div class = "traffic-progressbar trafffic-progress-75"></div>
                    <div class= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>

            <div class="traffic-container ">


                <span>Facebook</span>

                <div class="traffic-bar-container">
                    <span>2,236</span>
                    <div  class = "traffic-progress-container "> 
                    <div class = "traffic-progressbar trafffic-progress-50"></div>
                    <div class= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>

            <div class="traffic-container ">


                <span>Twitter</span>

                <div class="traffic-bar-container">
                    <span>1,795</span>
                    <div  class = "traffic-progress-container"> 
                    <div class = "traffic-progressbar trafffic-progress-20"></div>
                    <div class= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>


            <div class="traffic-container ">


                <span>LinkedIn</span>
                <div class="traffic-bar-container">
                    <span>62</span>
                    <div  class = "traffic-progress-container"> 
                    <div class = "traffic-progressbar trafffic-progress-8" ></div>
                    <div class= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>

        </div>




    )

}