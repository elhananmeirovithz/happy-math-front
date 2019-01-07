
// import { createStore , combineReducers, applyMiddleware} from "redux";
// import logger from 'redux-logger';

import React from "react";
import {render} from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";

import store from "./store"
// const userReducer = (
//     state = {
//         name: "elhanan",
//         age: 27
//     }, action) => {
//     switch (action.type) {
//         case "SET_NAME":
//             state = {
//                 ...state,
//                 name: action.payload,
//             }
//             break;
//         case "SET_AGE":
//             state = {
//                 ...state,
//                 age: action.payload,
//             }
//             break;
//     }
//     return state
// };//what acton accured

// const mathReducer = (
//     state = {
//         result: 1,
//         lastValues: []
//     }, action) => {
//     switch (action.type) {
//         case "ADD":
//             state = {
//                 ...state,
//                 result: state.result + action.payload,
//                 lastValues: [...state.lastValues, action.payload ]
//             }
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state,
//                 result: state.result - action.payload,
//                 lastValues: [...state.lastValues, action.payload ]
//             }
//             break;
//     }
//     return state
// };//what acton accured



// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action);
// }

// const store = createStore(
//         combineReducers({mathReducer,userReducer}), 
//         {}, 
//         applyMiddleware(logger)
//     )

// store.subscribe(
//     () => {
//         console.log("store updated", store.getState());
//     }
// )

// store.dispatch({
//     type: "ADD",
//     payload: 100
// });

// store.dispatch({
//     type: "SUBTRACT",
//     payload: 10
// });

// store.dispatch({
//     type: "ADD",
//     payload: 1000
// });

// store.dispatch({
//     type: "SET_AGE",
//     payload: 30
// });


render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app'));
