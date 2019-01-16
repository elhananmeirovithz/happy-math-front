import { createStore , combineReducers, applyMiddleware} from "redux";
import logger from 'redux-logger';

import userReducer from "./reducers/userReducer";
import mathReducer from "./reducers/mathReducer";
import targilAreaReducer from "./reducers/targilAreaReducer";

const store = createStore(
    combineReducers({
        mathReducer,
        userReducer,
        targilAreaReducer
    }), 
    {}, 
    applyMiddleware(logger)
);

// console.log(store.getState())

export default store