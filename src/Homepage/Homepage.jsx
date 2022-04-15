import React, { useEffect, useState } from "react";
import "./homepage.css";
import Modals from "./Modals";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actioncreators } from "../state";
import { Button } from "primereact/button";
import "antd/dist/antd.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
import { InputText } from "primereact/inputtext";
import { bindActionCreators } from "redux";
const Homepage = () => {


  const state = useSelector((state) => state.posts);//useSelector ->To select specific state
  const dispatch = useDispatch();
  const {
    fetchdata,
    deletepostsbyid,
    addpostbyid,
    updatepostbyid,
    searchpostbyid,
  } = bindActionCreators(actioncreators, dispatch);


  ///States
  const [searchbyid, setsearchbyid] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState({
    currentstate: false,
    editing: false,
  });
  const [currentedit, setcurrentedit] = useState([]);



  ///UseEffects
  useEffect(() => {
    fetchdata(state.posts);

    console.log("real", state);
  }, []);
  useEffect(() => {}, [currentedit]);
  useEffect(() => {
    if (searchbyid == "") {
      fetchdata(state.posts);
    }
  }, [searchbyid]);





  return (
    <>
      <div style={{ width: "100vw" }}>
        <h1 style={{ textAlign: "center" , fontSize:"2rem"}}>Post Lists</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <Modals
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              currentedit={currentedit}
              setcurrentedit={setcurrentedit}
              addpostbyid={addpostbyid}
              updatepostbyid={updatepostbyid}
              state={state}
            ></Modals>
          </div>
          <div>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                style={{ width: "70vw" }}
                value={searchbyid}
                onChange={(e) => {
                  setsearchbyid(e.target.value);
                  if (e.target.value.trim() != "") {
                    searchpostbyid(state, e.target.value.trim());
                  }
                }}
                placeholder="Search Posts By ID"
              />
            </span>
          </div>
        </div>
        {!state.error ? (
          <div>
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
                  {state.posts.map((item) => {
                    return (
                      <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setcurrentedit(item);
                              setIsModalVisible({
                                currentstate: true,
                                editing: true,
                              });
                            }}
                          >
                            Edit
                          </Button>{" "}
                          <Button
                            onClick={() => {
                              deletepostsbyid(state, item.id);
                            }}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <h1 style={{ textAlign: "center", color: "red", marginTop: "2rem" }}>
            No Posts Exists
          </h1>
        )}
      </div>
    </>
  );
};

export default Homepage;
