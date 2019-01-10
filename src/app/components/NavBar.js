import React from "react";
import './css/NavBar.css';

export const NavBar = (props) => {
        return (
            <nav className="navbar bg-primary navbar-dark">
                 <a href="#" className="navbar-brand">Happy Math Game</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">ME</a>
                        </li>
                        <li className="nav-item">
                                <a href="#" className="nav-link">YOU</a>
                            </li>
                    </ul>
                </div> */}
             </nav>  
        )
};