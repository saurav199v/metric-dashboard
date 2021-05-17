import React from 'react';

import '../Header/Header.css';

export default function Header() {

    return (
        <div className = "header-container">
            <div className = "header-label"> Dashboard </div>
            <div> <select className = "header-dropdown">
                    <option> ENG</option>
                </select>
                </div>
        </div>
    ); 
}