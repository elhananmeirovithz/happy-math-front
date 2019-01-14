import React, {Fragment} from "react";
import './css/TargilArea.css';
const math = require('mathjs');
const Parser = require('html-react-parser');
import { TargilAreaRow } from  "./TargilAreaRow"; 



import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
// import div from 'react-bootstrap/lib/div'


export const TargilArea = (props) => {
        var jsonRows = props.targil.rows;
        var jsonRowsLength = Object.keys(jsonRows).length;
        
        var heightRows = 0;
        var griddivums = [];
        for (var i = 0; i < jsonRowsLength; i++) {
            switch (eval("jsonRows.row" + i + ".type")) {
                case "number":
                    griddivums.push(eval("jsonRows.row" + i + ".number").toString().length)
                    heightRows=heightRows+1;
                    break;
                case "line":
                    heightRows=heightRows+0.5;
                    break;
                default:
                    griddivums.push(0)
            }
            // console.log(eval("jsonRows.row" + i))
        }
        heightRows=80/heightRows;

        /* Generate the targil presentation */
            let html = [];
                for (var i = 0; i < jsonRowsLength; i++) {
                    var html_row = "";
                    switch (eval("jsonRows.row" + i + ".type")) {
                        case "number":
                            var num_text = eval("jsonRows.row" + i + ".number").toString();
                            html_row = html_row + "<li key={" + i + "}><div  className='row' >";
                            console.log(typeof math.max(griddivums));
                            for (var ii = 0; ii < math.max(griddivums); ii++) {
                                html_row = html_row + "<div class='divumn' style='background-divor:#aaa;'>"
                                    html_row = html_row + "<p>" + i + "</p>";       
                                html_row = html_row + "</div>";        
                            }
                            html_row = html_row + "</div></li>"; 
                            break;
                        case "line":
                            html_row = html_row + "<li key={" + i + "}><div className='row'>";
                                html_row = html_row + "<div className='div-lg-2 div-lg-offset-1'>";
                                    html_row = html_row + "<hr></hr></div'>";
                                html_row = html_row + "</div'></li>";
                            // html_row = html_row + "</div'>";
                            break;
                        default:
                        html_row = html_row + <div className='row'>;
                        html_row = html_row + </div>;
                    }
                    html.push(html_row);
                }


        // for (var i = 0; i < math.max(griddivums); i++) {

            const numbers = [1, 2, 3, 4, 5];
            const listItems = numbers.map((number,i) =>
              <li key={i}>{number}</li>
            );

            // console.log(listItems);
        const listItems2 = html.map((htmli ,i) =>
          <li key={i}>{htmli}</li>
        );
        // console.log(listItems2);


        return (
            // <ul>
            //   {listItems2}
            //   {/* {a} */}
            // </ul>  
            <Container fluid="true" justify="start" className="container-fluid">
                {/* the number + the hight in % and the type=(number/line ...) */}
                <TargilAreaRow num={345} height={30} type={"number"} rowsToShow={4}/>
                {/* the symble + the hight in % and the type=(operator) the col to display */}
                <TargilAreaRow symble={"+"} height={30} type={"operator"} rowsToShow={4} symbleCol={4}/>
                <TargilAreaRow num={65} height={30} type={"number"} rowsToShow={4}/>

                <TargilAreaRow height={2} type={"line"} rowsToShow={4} lineToShow={3}/>
            </Container>
        )
};