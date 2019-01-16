import React, {Fragment} from "react";
import './css/TargilArea.css';
const math = require('mathjs');
const Parser = require('html-react-parser');
import { TargilAreaRow } from  "./TargilAreaRow"; 



import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
// import div from 'react-bootstrap/lib/div'

var lineweidth = 0.05;

export const TargilArea = (props) => {
        var jsonRows = props.targil.rows;
        var jsonRowsLength = Object.keys(jsonRows).length;
        
        var heightRows = 0;
        var colNum = [];
        var num = [];
        var operator = [];
        var type = [];
        var height = [];
        for (var i = 0; i < jsonRowsLength; i++) {
            type.push(eval("jsonRows.row" + i + ".type"));
            switch (type[i]) {
                case "number":
                    colNum.push(eval("jsonRows.row" + i + ".number").toString().length);
                    num.push(eval("jsonRows.row" + i + ".number"));
                    operator.push("")
                    height.push(1);
                    heightRows=heightRows + 1;
                    break;
                case "line":
                    colNum.push(eval("jsonRows.row" + i + ".symbleCol"));
                    num.push("")
                    operator.push("")
                    height.push(lineweidth);
                    heightRows=heightRows+lineweidth; // the height of the line
                    break;
                case "operator":
                    colNum.push(eval("jsonRows.row" + i + ".symbleCol"));
                    num.push("")
                    operator.push(eval("jsonRows.row" + i + ".operator"))
                    height.push(1);
                    heightRows=heightRows+0;
                    break;
                default:
                    num.push("")
                    colNum.push(0)
                    operator.push("")
            }
            // console.log(eval("jsonRows.row" + i))
        }
        // consolse.log(height[1]*heightRows)
        heightRows=80/heightRows; //80 is the hight of the targilArea ///need to get out to the main
        var colNumMax = math.max(colNum);
        
        /*generate the rows to display*/ 



        return ( 
            <Container fluid="true" justify="start" className="container-fluid">
                {/* the number + the hight in % and the type=(number/line ...) */}
                {type[0] ? (<TargilAreaRow num={num[0]} symble={operator[0]} height={height[0]*heightRows} type={type[0]} rowsToShow={colNumMax} colToShow={colNum[0]}/>):("")}
                {type[1] ? (<TargilAreaRow num={num[1]} symble={operator[1]} height={height[1]*heightRows} type={type[1]} rowsToShow={colNumMax} colToShow={colNum[1]}/>):("")}
                {type[2] ? (<TargilAreaRow num={num[2]} symble={operator[2]} height={height[2]*heightRows} type={type[2]} rowsToShow={colNumMax} colToShow={colNum[2]}/>):("")}
                {type[3] ? (<TargilAreaRow num={num[3]} symble={operator[3]} height={height[3]*heightRows} type={type[3]} rowsToShow={colNumMax} colToShow={colNum[3]}/>):("")}
                {type[4] ? (<TargilAreaRow num={num[4]} symble={operator[4]} height={height[4]*heightRows} type={type[4]} rowsToShow={colNumMax} colToShow={colNum[4]}/>):("")}
                {type[5] ? (<TargilAreaRow num={num[5]} symble={operator[5]} height={height[5]*heightRows} type={type[5]} rowsToShow={colNumMax} colToShow={colNum[5]}/>):("")}
                {type[6] ? (<TargilAreaRow num={num[6]} symble={operator[6]} height={height[6]*heightRows} type={type[6]} rowsToShow={colNumMax} colToShow={colNum[6]}/>):("")}
                {type[7] ? (<TargilAreaRow num={num[7]} symble={operator[7]} height={height[7]*heightRows} type={type[7]} rowsToShow={colNumMax} colToShow={colNum[7]}/>):("")}
            </Container>
        )
};