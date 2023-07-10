import React, { useState } from "react";
import { Button, Modal, ModalDialog } from "react-bootstrap";
import "./style.css";
function MainPageModal({showModal,setShowModal,content}) {

  const handleClose = () => setShowModal(false);

  return (

    <Modal
      show={showModal}
      centered
      fullscreen
      onHide={handleClose}
      dialogClassName="fullscreen-modal"
      className="semi-transparent-modal"
    >
               <Modal.Header className="border-0" closeButton>
        </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
        {content}
      </Modal.Body>
    </Modal>
  );
}
export default MainPageModal;
