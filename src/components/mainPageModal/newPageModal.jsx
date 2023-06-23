import React, { useState } from "react";
import { Button, Modal, ModalDialog } from "react-bootstrap";
import "./style.css";
function MainPageModal({showModal,setShowModal}) {

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
        
          {
    console.log(showModal)
  }
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
        <Button variant="outline-light" size="lg" className="mb-4" >
          Button 1
        </Button>
        <Button variant="outline-light" size="lg" className="mb-4">
          Button 2
        </Button>
        <Button variant="outline-light" size="lg" className="mb-4">
          Button 3
        </Button>
        <Button variant="outline-light" size="lg" className="mb-4">
          Button 4
        </Button>
      </Modal.Body>
    </Modal>
  );
}
export default MainPageModal;
