import React from "react";
import './css/ButtonToolbarNumbers.css';
import { ButtonToolbarNumbersButton } from  "./ButtonToolbarNumbersButton"; 

// import 'bootstrap';
// import 'bootstrap/js/dist/modal'
// import 'bootstrap/js/dist/tooltip'
// import 'bootstrap/dist/css/bootstrap.css'

export const ButtonToolbarNumbers = (props) => {
        return (
            <div>
                <div className="btn-group btn-group-justified blocks">
                    <ButtonToolbarNumbersButton num={0}/>    
                    <ButtonToolbarNumbersButton num={1}/>  
                    <ButtonToolbarNumbersButton num={2}/>  
                    <ButtonToolbarNumbersButton num={3}/>  
                    <ButtonToolbarNumbersButton num={4}/> 
                </div>
               
                <div className="btn-group btn-group-justified blocks">
                    <ButtonToolbarNumbersButton num={5}/> 
                    <ButtonToolbarNumbersButton num={6}/>  
                    <ButtonToolbarNumbersButton num={7}/>  
                    <ButtonToolbarNumbersButton num={8}/>  
                    <ButtonToolbarNumbersButton num={9}/>   
                </div>
            </div>  
        )
};