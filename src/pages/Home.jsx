import React, { useState } from 'react';
import Insights from '../components/insights/insights';
import Visitors from '../components/visitors/visitors';
import LeftNav from '../components/LeftNav/LeftNav';
import Header from '../components/Header/Header';
import VisitedPage from '../components/visitedPage/VisitedPage';
import Traffic from '../components/Traffic/Traffic';
import '../pages/home.css';

export default function Home(){
     const [showNav, updateShowNav] = useState(false);
    return(
      
      <div className="home-container full-height home-full-width" >
        <div className="home-left-nav" >
        <LeftNav />
          </div>
        <div className = "home-full-width">
          <Header />
          <div className="full-height dashboard-container" >
            <div className = "home-visitor-container">
              <Visitors></Visitors>
              </div>
            
              <div className = "home-insights-container"> 

                <Insights></Insights>
              </div>
              <div className= "home-traffic-container">
                <div className = "home-traffic-item-1">
                <VisitedPage></VisitedPage>

                </div>
              <div className= "home-traffic-item-2">
              <Traffic></Traffic>
              </div>
              
              </div>
          </div>
        </div>
      </div>
    )

}