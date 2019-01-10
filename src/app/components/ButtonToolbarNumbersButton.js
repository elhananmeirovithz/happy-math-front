import React from "react";
import './css/ButtonToolbarNumbersButton.css';

export const ButtonToolbarNumbersButton = (props) => {
        return (
            <div className="btn-group" role="group" aria-label="First group">
                <button type="button" className="btn btn-primary">
                    <span className="btn-text">{props.num}</span>
                </button>
            </div>         
        )
};