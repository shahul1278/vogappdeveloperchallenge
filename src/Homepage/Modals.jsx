import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Modal, Button } from "antd";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const Modals = ({
  isModalVisible,
  setIsModalVisible,
  currentedit,
  setcurrentedit,
  addpostbyid,
  state,
  updatepostbyid,
}) => {
  const [currentdata, setcurrentdata] = useState(currentedit); //Holds Current Modal Data

  const showModal = () => {
    setIsModalVisible({ currentstate: true, editing: false });
    setcurrentedit([]);
  };

  const handleOk = () => {
    setcurrentedit([]);
    setIsModalVisible({ currentstate: false, editing: false });
    if (isModalVisible.editing) {
      updatepostbyid(state, currentdata);
    } else {
      addpostbyid(state, currentdata);
    }
  };

  const handleCancel = () => {
    setcurrentedit([]);
    setIsModalVisible({ currentstate: false, editing: false });
  };

  ///useEffect

  useEffect(() => {
    if (isModalVisible.editing) {
      setcurrentdata(currentedit);
    } else {
      setcurrentdata({ userId: currentedit.userId, title: "", body: "" });
    }
  }, [isModalVisible]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginLeft: "5rem" }}>
          <Button style={{ width: "12vw" }} type="primary" onClick={showModal}>
            Create Post
          </Button>
        </div>
        <Modal
          title={<h2>Post:{currentdata.id}</h2>}
          visible={isModalVisible.currentstate}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <span>
                {" "}
                <b>Title : </b>
              </span>
              <InputText
                onChange={(e) => {
                  setcurrentdata({ ...currentdata, title: e.target.value });
                }}
                style={{ width: "20vw", marginLeft: "2rem" }}
                value={currentdata.title}
              />{" "}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              {" "}
              <span>
                {" "}
                <b>Body : </b>
              </span>{" "}
              <InputTextarea
                onChange={(e) => {
                  setcurrentdata({ ...currentdata, body: e.target.value });
                }}
                style={{ width: "20vw", marginLeft: "2rem" }}
                value={currentdata.body}
                rows={2}
                cols={40}
                autoResize
              />{" "}
            </div>{" "}
          </div>
        </Modal>{" "}
      </div>
    </>
  );
};
export default Modals;
