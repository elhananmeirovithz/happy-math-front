import React from "react";
import './css/ButtonToolbarNumbersButton.css';

// import 'bootstrap';
// import 'bootstrap/js/dist/modal'
// import 'bootstrap/js/dist/tooltip'
// import 'bootstrap/dist/css/bootstrap.css'

export const ButtonToolbarNumbersButton = (props) => {
        return (
            <div className="btn-group" role="group" aria-label="First group">
                <button type="button" className="btn btn-primary">
                    <span className="btn-text">{props.num}</span>
                </button>
            </div>         
        )
};