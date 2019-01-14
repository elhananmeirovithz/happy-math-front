import React from "react";
import './css/TargilAreaRow.css';

// import 'bootstrap';
// import 'bootstrap/js/dist/modal'
// import 'bootstrap/js/dist/tooltip'
// import 'bootstrap/dist/css/bootstrap.css'

export const TargilAreaRow = (props) => {

        var type = props.type;
        
        switch (type) {
            case "number":
                var num_text = props.num.toString();
                var text_disp = [];
                var margin = 0;
                var backgroundColor = ""
                for (var i = 10-1; i >= 0; i--)
                    {
                        var res = num_text.charAt(i);
                        if(res == null){ var res="" };
                        text_disp.push(res);
                    }
                
                break;
            case "operator":
                var num_text = props.symble;
                var margin = (-1 * (props.height/2)) + "vh"
                var backgroundColor = ""
                var text_disp = [];
                for (var i = 10-1; i >= 0; i--)
                    {
                        if(i == props.symble-1){ var res=num_text }else{var res = ""};
                        text_disp.push(res);
                    }
                break;
            case "line":
                var num_text = props.lineToShow;
                var text_disp = [];
                for (var i = 10-1; i >= 0; i--)
                    {
                        if(i <= props.lineToShow-1){ var res="." }else{var res = ""};
                        text_disp.push(res);
                    }
                var margin = 0;
                var backgroundColor = "black"
                break;    
            default:
        }
        
        var colStyle=[];
        for (var i = 10-1; i >= 0; i--)
            {
                if (props.rowsToShow  <= i){ 
                    var res="colStyleHid" 
                } else {
                    switch (type) {
                        case "number":
                            var res="colStyleVis"
                            break;
                        case "operator":
                            var res="colStyleOpe"
                            break;
                            default:
                        }
                };
                colStyle.push(res);
            }

        const rowStyle = {
            "height":props.height.toString() + "vh",
            "display":"block",
            "marginTop": margin,
            "marginBottom": margin,
            "backgroundColor": backgroundColor,
        };
        const colStyleHid = {
            "height":"0px",
            "backgroundColor":"",
            "display":"inline-block",
            "width": "0px",
            "visibility":"hidden"
        };

        const colStyleVis = {
            "height":props.height.toString() + "vh",
            "lineHeight":props.height.toString() + "vh",
            "backgroundColor":"",
            "display":"inline-block",
            "width": 100/props.rowsToShow + "%",
            "visibility":"visible"
            
        };

        const colStyleOpe = {
            "height":props.height.toString() + "vh",
            "lineHeight":props.height.toString() + "vh",
            "display":"inline-block",
            "width": 100/props.rowsToShow + "%",
            "visibility":"visible"
        };
        
        const textStyle = {
            "fontSize":(props.height - 5).toString() + "vh",
            "display":"inline-block",
            "width": "100%",
            "verticalAlign":"top",
            "textAlign": "center",
        };

        console.log(eval(colStyle[0]))
        return (
            <div className="row_targil" style={rowStyle}>
                <div className="col_targil" style={eval(colStyle[0])}><span style={textStyle}>{text_disp[0]}</span></div>
                <div className="col_targil" style={eval(colStyle[1])}><span style={textStyle}>{text_disp[1]}</span></div>
                <div className="col_targil" style={eval(colStyle[2])}><span style={textStyle}>{text_disp[2]}</span></div>
                <div className="col_targil" style={eval(colStyle[3])}><span style={textStyle}>{text_disp[3]}</span></div>
                <div className="col_targil" style={eval(colStyle[4])}><span style={textStyle}>{text_disp[4]}</span></div>
                <div className="col_targil" style={eval(colStyle[5])}><span style={textStyle}>{text_disp[5]}</span></div>
                <div className="col_targil" style={eval(colStyle[6])}><span style={textStyle}>{text_disp[6]}</span></div>
                <div className="col_targil" style={eval(colStyle[7])}><span style={textStyle}>{text_disp[7]}</span></div>
                <div className="col_targil" style={eval(colStyle[8])}><span style={textStyle}>{text_disp[8]}</span></div>
                <div className="col_targil" style={eval(colStyle[9])}><span style={textStyle}>{text_disp[9]}</span></div>
            </div>
            // <div className="btn-group" role="group" aria-label="First group">
            //     <button type="button" className="btn btn-primary">
            //         {props.num}</span>
            //     </button>
            // </div>         
        )
};