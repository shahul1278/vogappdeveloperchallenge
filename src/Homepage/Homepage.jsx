import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homepage.css";
import Modal from "./Modals";
import Modals from "./Modals";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { actioncreators } from "../state";
import { bindActionCreators } from "redux";
const Homepage = () => {
  const state=useSelector((state)=>state.posts);
  const dispatch= useDispatch()
console.log(state)
const {getposts,fetchdata, deletepostsbyid}=bindActionCreators(actioncreators, dispatch)
console.log(getposts)
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
const [currentedit, setcurrentedit]=useState([])
  useEffect(() => {
     fetchdata(state.posts);
     console.log("real",state)

  }, []);
  useEffect(() => {
    

 }, [currentedit]);
  return (
    <>
      <div>
        <h1>Post Lists</h1>

        <div>
        
          <Modals
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            currentedit={currentedit}
            setcurrentedit={  setcurrentedit}
          ></Modals>
        </div>
      {!state.error? <div> 
        {!state.loading ? (
          <div className="conatiner">
            <table>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>

              {state.posts.slice(0,4).map((item) => {
                return (
                  <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <button onClick={()=>{setcurrentedit(item);
                      setIsModalVisible(true);
                      }}>Edit</button> <button onClick={()=>{deletepostsbyid(state, item.id)}}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <></>
        )}</div>:<h1>Network Error</h1>}
      </div>
    </>
  );
};

export default Homepage;
