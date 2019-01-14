import React from "react";
import './css/NavBar.css';

// import 'bootstrap';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';

export const NavBar = (props) => {
        return (
            <nav className="navbar bg-primary ">
                <a href="#" className="navbar-brand">
                    <span className="a-text">Happy Math Game</span>
                </a>
                {/* <button className="navbar-brand navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
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