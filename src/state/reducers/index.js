import {combineReducers} from "redux";
import postReducer from "./postReducer";
import universityReducer from "./universityReducer";
const reducers=combineReducers({
    posts:postReducer,
    country:universityReducer,
  
}); ////Combine Reducers

export default reducers;