import { createStore , combineReducers, applyMiddleware} from "redux";
import logger from 'redux-logger';

import userReducer from "./reducers/userReducer";
import mathReducer from "./reducers/mathReducer";

const createStores = createStore(
    combineReducers({
        mathReducer,
        userReducer
    }), 
    {}, 
    applyMiddleware(logger)
);

export default createStores