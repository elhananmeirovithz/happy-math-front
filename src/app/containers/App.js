
import React from "react";
import { connect } from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';

import { NavBar } from '../components/NavBar';
import { TargilArea } from '../components/TargilArea';
import { ButtonToolbarNumbers } from '../components/ButtonToolbarNumbers';


import { setName } from '../actions/userActions';
import './css/main.css'; // Import regular stylesheet

import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'



class App extends React.Component {
     
    render() {
        return (
            <Container>
                 <div className="row row-head">
                    <Col className="
                        col-lg-4 col-lg-offset-4  
                        col-md-8 col-md-offset-2
                        col-sm-10 col-sm-offset-1 
                        col-xs-12 col-xs-offset-0  
                        height-100">
                        <NavBar/>
                    </Col>
                </div>
                <div className="row row-targil">
                    <div className="
                        col-lg-4 col-lg-offset-4  
                        col-md-8 col-md-offset-2
                        col-sm-10 col-sm-offset-1 
                        col-xs-12 col-xs-offset-0  
                        text-white  bg-info height-100">
                        <TargilArea targil={this.props.targil}/>
                        </div>
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
            </Container>
        );
    }
}





// class App extends React.Component {
     
//     render() {
//         return (
//             <div className="container-fluid">
//                 <div className="row row-head">
//                     <div className="
//                         col-lg-4 col-lg-offset-4  
//                         col-md-8 col-md-offset-2
//                         col-sm-10 col-sm-offset-1 
//                         col-xs-12 col-xs-offset-0  
//                         height-100">
//                         <NavBar/> 
//                     </div>
//                 </div>
//                 <div className="row row-targil">
//                     <div className="
//                         col-lg-4 col-lg-offset-4  
//                         col-md-8 col-md-offset-2
//                         col-sm-10 col-sm-offset-1 
//                         col-xs-12 col-xs-offset-0  
//                         text-white  bg-info height-100">
//                         <TargilArea targil={this.props.targil}/>
//                         </div>
//                 </div>
//                 <div className="row row-foot">
//                     <div className="
//                         col-lg-4 col-lg-offset-4  
//                         col-md-8 col-md-offset-2
//                         col-sm-10 col-sm-offset-1 
//                         col-xs-12 col-xs-offset-0  
//                         text-white bg-warning height-100">
//                         <ButtonToolbarNumbers/>
//                         </div>
//                 </div>
//                 {/* <Main changeUsername={() => this.props.setName("Anna")}/> */}
//                 {/* <User username={this.props.user.name}/> */}
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => {
    return{
        targil: state.targilAreaReducer,
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
