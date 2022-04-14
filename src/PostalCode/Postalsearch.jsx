import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';

import { Select } from 'antd';
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { actioncreators } from "../state";
import { bindActionCreators } from "redux";

const Postalsearch=()=>{
const [value, setvalue]=useState()
const state=useSelector((state)=>state.postal);
const dispatch= useDispatch()
const {getpostalcodedetails }=bindActionCreators(actioncreators, dispatch)
console.log(state.loading)
// const {getposts,fetchdata, addposts}=bindActionCreators(actioncreators, dispatch)
// console.log(getposts)

useEffect(() => {

                        
    getpostalcodedetails(state, value)
}, [value]);
    return<>
    
    <div>
    <div className="field col-12 md:col-3">
                        <label htmlFor="minmax">Enter Postal Code</label>
                        <InputText value={value} onChange={(e) => {
                            console.log(e.target.value)
                            setvalue(e.target.value)
                        

                        }} />
                    </div>
                    <div>

                        {!state.loading?<div>
                            <h2> {state.postal.country}</h2>
                            
                             </div>:<><h3>he;llo</h3></>}
                    </div>
        </div></>
}

export default Postalsearch;