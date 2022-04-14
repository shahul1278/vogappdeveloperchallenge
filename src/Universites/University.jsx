import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Select } from 'antd';
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { actioncreators } from "../state";
import { bindActionCreators } from "redux";
const { Option } = Select;



const University=()=>{
    const state=useSelector((state)=>state.country);
    const dispatch= useDispatch()
    const {getcountrieslist, getselectedcountry}=bindActionCreators(actioncreators, dispatch)
  console.log(state)
 // const {getposts,fetchdata, addposts}=bindActionCreators(actioncreators, dispatch)
 // console.log(getposts)
 function handleChange(value) {
    console.log(`selected ${value}`);
    getselectedcountry(state, value)
  }
  
    useEffect(() => {
    
      getcountrieslist(state)
   
  
    }, []);

    return<>
    <div>{ !state.loading1?
        <div> 
    <Select  style={{ width: 120 }} onChange={handleChange}>
     {state.country.map(item=>{

         return  <Option value={item.name.common}>{item.name.common}</Option>
     })}
     
    </Select> </div>:<></>}
    </div>
    { !state.loading1?<div> 
{state.selectedcountrydata.map(item=>{
    return <h3>{item.name}</h3>
})}
    </div> :<></>}

    <div>

        Selected Country
    </div>
    </>
}

export default University;