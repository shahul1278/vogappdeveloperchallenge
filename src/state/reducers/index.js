import {combineReducers} from "redux";
import getpostreducer from "./getpostReducer";
import getcountryreducer from "./universtiyReducer";
import searchpostreducer from "./searchpostreducer";
const reducers=combineReducers({

    posts:getpostreducer,
    country:getcountryreducer,
    postal:searchpostreducer
});

export default reducers;