import React from 'react';

import '../Traffic/traffic.css';




export default function Traffic() {

    return (
        <div className="traffic-parent-container">
            <h2>Social Media Traffic</h2>
            <div className="traffic-container traffic-header" >


                <span>Network</span>
                <span>Visitors</span>

            </div>

            <div className="traffic-container ">


                <span>Instagram</span>

                <div className="traffic-bar-container">
                    <span>3,550</span>
                    <div  className = "traffic-progress-container"> 
                    <div className = "traffic-progressbar trafffic-progress-75"></div>
                    <div className= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>

            <div className="traffic-container ">


                <span>Facebook</span>

                <div className="traffic-bar-container">
                    <span>2,236</span>
                    <div  className = "traffic-progress-container "> 
                    <div className = "traffic-progressbar trafffic-progress-50"></div>
                    <div className= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>

            <div className="traffic-container ">


                <span>Twitter</span>

                <div className="traffic-bar-container">
                    <span>1,795</span>
                    <div  className = "traffic-progress-container"> 
                    <div className = "traffic-progressbar trafffic-progress-20"></div>
                    <div className= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>


            <div className="traffic-container ">


                <span>LinkedIn</span>
                <div className="traffic-bar-container">
                    <span>62</span>
                    <div  className = "traffic-progress-container"> 
                    <div className = "traffic-progressbar trafffic-progress-8" ></div>
                    <div className= "traffic-progress-base"></div>
                   
                        
                         
                        </div>
                </div>


            </div>

        </div>




    )

}