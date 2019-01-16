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
        ////////////////////////
        //////* The data *//////
        ////////////////////////
        var jsonSteps = props.targil.steps;
        var currentStep = jsonSteps.step0;

        var jsonRows = props.targil.rows;
        var jsonRowsLength = Object.keys(jsonRows).length;
        
        /////////////////////////////
        //////* On the screen *//////
        /////////////////////////////
        var heightRows = 0;
        var colNum = [];
        var num = [];
        var operator = [];
        var type = [];
        var height = [];
        var highlight = [];
        var mark = [];
        var show = [];
        for (var i = 0; i < jsonRowsLength; i++) {
            highlight.push(eval("currentStep.highlight.row" + i));
            mark.push(eval("currentStep.mark.row" + i));

            show.push(eval("jsonRows.row" + i + ".show"));
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
        console.log(show)
        heightRows=80/heightRows; //80 is the hight of the targilArea ///need to get out to the main
        var colNumMax = math.max(colNum);
        
        ////////////////////////
        ///////* STEPS *////////
        ////////////////////////
       

        // console.log(mark)

        ////////////////////////
        ///////* Display *//////
        ////////////////////////
        /*generate the rows to display*/ 
        return ( 
            <Container fluid="true" justify="start" className="container-fluid">
                {/* the number + the hight in % and the type=(number/line ...) */}
                {type[0] ? (<TargilAreaRow num={num[0]} show={show[0]} mark={mark[0]} highlight={highlight[0]} symble={operator[0]} height={height[0]*heightRows} type={type[0]} rowsToShow={colNumMax} colToShow={colNum[0]}/>):("")}
                {type[1] ? (<TargilAreaRow num={num[1]} show={show[1]} mark={mark[1]} highlight={highlight[1]} symble={operator[1]} height={height[1]*heightRows} type={type[1]} rowsToShow={colNumMax} colToShow={colNum[1]}/>):("")}
                {type[2] ? (<TargilAreaRow num={num[2]} show={show[2]} mark={mark[2]} highlight={highlight[2]} symble={operator[2]} height={height[2]*heightRows} type={type[2]} rowsToShow={colNumMax} colToShow={colNum[2]}/>):("")}
                {type[3] ? (<TargilAreaRow num={num[3]} show={show[3]} mark={mark[3]} highlight={highlight[3]} symble={operator[3]} height={height[3]*heightRows} type={type[3]} rowsToShow={colNumMax} colToShow={colNum[3]}/>):("")}
                {type[4] ? (<TargilAreaRow num={num[4]} show={show[4]} mark={mark[4]} highlight={highlight[4]} symble={operator[4]} height={height[4]*heightRows} type={type[4]} rowsToShow={colNumMax} colToShow={colNum[4]}/>):("")}
                {type[5] ? (<TargilAreaRow num={num[5]} show={show[5]} mark={mark[5]} highlight={highlight[5]} symble={operator[5]} height={height[5]*heightRows} type={type[5]} rowsToShow={colNumMax} colToShow={colNum[5]}/>):("")}
                {type[6] ? (<TargilAreaRow num={num[6]} show={show[6]} mark={mark[6]} highlight={highlight[6]} symble={operator[6]} height={height[6]*heightRows} type={type[6]} rowsToShow={colNumMax} colToShow={colNum[6]}/>):("")}
                {type[7] ? (<TargilAreaRow num={num[7]} show={show[7]} mark={mark[7]} highlight={highlight[7]} symble={operator[7]} height={height[7]*heightRows} type={type[7]} rowsToShow={colNumMax} colToShow={colNum[7]}/>):("")}
            </Container>
        )
};