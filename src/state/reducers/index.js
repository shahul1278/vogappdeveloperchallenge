import {combineReducers} from "redux";
import postReducer from "./postReducer";
import universityReducer from "./universityReducer";
import postalcodereducer from "./postalcodereducer";
const reducers=combineReducers({
    posts:postReducer,
    country:universityReducer,
    postal:postalcodereducer
  
}); ////Combine Reducers

export default reducers;