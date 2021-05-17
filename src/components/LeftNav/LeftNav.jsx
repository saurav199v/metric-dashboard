import React from 'react';
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./LeftNav.css";
import DashboardIcon from '@material-ui/icons/Dashboard';

import InboxIcon from '@material-ui/icons/Inbox';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import profileImg from '../../images/profile.jpg';

export default function LeftNav() {
    return (
        <div>
            <div  className= "profile-home"> 
            <HomeOutlinedIcon />
            </div>
            <div className="profile-container"> 
                <div className="avatar-container">
                    <img src={profileImg} alt={"profile"} width="100%" />
                    <div>

                    </div>
                </div>
                <div className="profile-name">
                    Saurav Verma
                </div>
                <div  className="profile-description"> 
                    Developer
                </div>
            </div>
      <div className="profile-navigation">
           <Navigation
        //   activeItemId={location.pathname}
        //   onSelect={({ itemId }) => {
        //     history.push(itemId);
        //   }}
          items={[
            {
              title: "Dashboard",
              itemId: "/dashboard",
              elemBefore: () => <DashboardIcon fontSize="small" style ={{color:"#adafb2"}}/>,
              subNav: [
                {
                  title: "Page Visitors",
                  itemId : "/dashboard/pvisitor"
                },
                {
                  title: "Post Performance",
                  itemId : "/dashboard/performance"
                },
                {
                  title: "Team Overall",
                  itemId : "/dashboard/overall"
                }
              ]
            },
            {
              title: "Inbox",
              itemId: "/inbox",
              elemBefore: () => <InboxIcon fontSize="small" style ={{color:"#adafb2"}}/>
            
            },
            {
              title: "Invoicing",
              itemId: "/invoicing",
              elemBefore: () => <BusinessCenterOutlinedIcon fontSize="small" style ={{color:"#adafb2"}} />
            
            },
            {
              title: "Lab / Experimental",
              itemId: "/lab",
              elemBefore: () => <ListAltOutlinedIcon fontSize="small" style ={{color:"#adafb2"}} />
              

            }
          ]}
        /> 
        </div>
        </div>
    )
}