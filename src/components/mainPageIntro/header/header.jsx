import React, { useState } from "react";
import "./header.css";
import Shareh from "../../../assests/shaareh.png";
import Contact from "../../../assests/contact-us.png";
import Telegram from "../../../assests/icons8-telegram.svg";
import Data from "../../../assests/result.json";
function MainPageHeader({ setShowModal, showModal, setContent }) {
  function get_vid_id(url, with_v = true) {
    let x = url.split("/").slice(-1)[0];
    return with_v ? "/v/" + x.split("?")[0] : x.split("?")[0];
  }
  function contactUs() {
    return (
      <div className={""} style={{ direction: "ltr", textAlign: "center" }}>
        <p>
          برای دانستنِ تازه‌ترین تغییراتِ تارگاه، عضوِ کانالِ خبررسانِ شارح
          بشوید
        </p>
        <a href={"https://t.me/shaareh"}>
          <img
            src={Telegram}
            className={"icon-link"}
            height={30}
            alt={"telegram"}
          />
          @Shaareh
        </a>
      </div>
    );
  }
  function matla() {
    return (
      <ul  style={{maxHeight:"80vh"}}>
        {Data.sort().map((x) => 
          <li>
            <a className="link-info link-underline-opacity-0" style={{textDecoration:"none"}} href={get_vid_id(x.data.vid_url)}>{x.data.title}</a>
            </li>
        )}
      </ul>
    );
  }

  return (
    <div className=" z-3 fixed-top pt-2">
      <div className="d-flex justify-content-around flex-row z-3  justify-content-around ">
        <div className="bg-black bg-opacity-50 rounded-5 p-1 px-3">
          <img
            src={Shareh}
            className="m-logo"
            style={{ height: "40px", filter: "invert(100%)" }}
            alt={""}
          />
        </div>
        <div className="my-auto bg-black bg-opacity-50 rounded-5 p-2 px-3 pointer-event">
          <a
            className="text-light my-auto fs-6 text-decoration-none"
            href="/#"
            onClick={() => {
              setContent(matla());
              setShowModal(true);
            }}
          >
            تارگاه شارح
            {/*<i className="bi bi-chevron-down" />*/}
          </a>
        </div>
        <div className="bg-black bg-opacity-50 rounded-5 p-1 d-flex justify-content-center px-3">
          <a
            className="icon-link icon-link-hover"
            href="#"
            onClick={() => {
              setContent(contactUs());
              setShowModal(true);
            }}
          >
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
