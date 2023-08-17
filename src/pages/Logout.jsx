import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { redirect } from "react-router-dom";

const Logout = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const handleCancel = () => {
    setModalVisible(false);
    // Redirect to the desired page
    return redirect("/");
  };

  return (
    <div>
      <Modal
        title="Loading Modal"
        visible={modalVisible}
        onOk={() => {
          return redirect("/login");
        }}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to logout?</p>
        {/* YouThis is a loading modal that appears when the page loads. can add loading animations or content here */}
      </Modal>
      {/* The rest of your content */}
    </div>
  );
};

export default Logout;
