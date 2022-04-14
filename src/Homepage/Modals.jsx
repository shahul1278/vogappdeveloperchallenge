import React, { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Modal, Button } from "antd";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const Modals = ({ isModalVisible, setIsModalVisible, currentedit,  setcurrentedit }) => {
  console.log("data",currentedit)
  const showModal = () => {
    setcurrentedit([]);
    setIsModalVisible(true);
  };
  useEffect(() => {
    console.log("current", currentedit)

  }, [currentedit]);

  const handleOk = () => {
    setcurrentedit([]);

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setcurrentedit([]);
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
      Add Post
      </Button>
      <Modal
        title={<h2>Post:{currentedit.id}</h2>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <div> <span> <b>Title : </b></span><InputText value={currentedit.title}  /> </div> 
      <div> <span> <b>Description  : </b></span> <InputTextarea  value={currentedit.body}  rows={2} cols={40} autoResize  /> </div> </div>
      </Modal>{" "}
    </>
  );
};
export default Modals;
