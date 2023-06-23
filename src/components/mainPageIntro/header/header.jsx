import React, { useState } from "react";
import "./header.css";
import Shareh from "../../../assests/shaareh.png";
import Contact from "../../../assests/contact-us.png";
function MainPageHeader({setShowModal,showModal}) {
  return (
    <div className=" z-3 fixed-top">
      <div className="d-flex justify-content-around flex-row z-3  justify-content-around ">
        <div className="bg-black bg-opacity-50 rounded-5 p-1 px-3">
          <img
            src={Shareh}
            className="m-logo"
            style={{ height: "40px", filter: "invert(100%)" }}
          />
        </div>
        <div className="my-auto bg-black bg-opacity-50 rounded-5 p-2 px-3 pointer-event">
          <a className="text-light my-auto fs-6 text-decoration-none" href="#" onClick={()=>setShowModal(true)}>
            تارگاه شارح <i className="bi bi-chevron-down" />
          </a>
        </div>
        <div className="bg-black bg-opacity-50 rounded-5 p-1 d-flex justify-content-center px-3">
          <a className="icon-link icon-link-hover" href="#">
            <img
              src={Contact}
              className="m-logo"
              alt="contact-us"
              style={{ height: "40px", filter: "invert(100%)" }}
            />
          </a>

          {/* <img
            src={Contact}
            className="opacity-100"
            style={{ height: "40px", filter: "invert(100%)" }}
          /> */}
        </div>
      </div>
    </div>
  );
}
export default MainPageHeader;
