
import React from "react";
import { connect } from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';

import { ButtonToolbarNumbers } from '../components/ButtonToolbarNumbers';
import { NavBar } from '../components/NavBar';


import { setName } from '../actions/userActions';
import './css/main.css'; // Import regular stylesheet
import 'bootstrap';
// import {setName} from '../actions/userActions';

class App extends React.Component {
     
    render() {
        return (
            <div className="container-fluid">
                <div className="row row-head">
                    <div className="
                        col-lg-4 col-lg-offset-4  
                        col-md-8 col-md-offset-2
                        col-sm-10 col-sm-offset-1 
                        col-xs-12 col-xs-offset-0  
                        height-100">
                        <NavBar/> 
                    </div>
                </div>
                <div className="row row-targil-up">
                    <div className="
                        col-lg-4 col-lg-offset-4  
                        col-md-8 col-md-offset-2
                        col-sm-10 col-sm-offset-1 
                        col-xs-12 col-xs-offset-0  
                        text-white  bg-info height-100">tragil area</div>
                </div>
                <div className="row row-targil-down">
                    <div className="
                        col-lg-4 col-lg-offset-4  
                        col-md-8 col-md-offset-2
                        col-sm-10 col-sm-offset-1 
                        col-xs-12 col-xs-offset-0  
                        text-white  bg-success height-100">small targil</div>
                </div>
                <div className="row row-foot">
                    <div className="
                        col-lg-4 col-lg-offset-4  
                        col-md-8 col-md-offset-2
                        col-sm-10 col-sm-offset-1 
                        col-xs-12 col-xs-offset-0  
                        text-white bg-warning height-100">
                        <ButtonToolbarNumbers/>
                        </div>
                </div>
                {/* <Main changeUsername={() => this.props.setName("Anna")}/> */}
                {/* <User username={this.props.user.name}/> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.userReducer,
        math: state.mathReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setName: (name) => {
            dispatch(setName(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
