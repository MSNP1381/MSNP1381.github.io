import React, { useState } from "react";
// import IntroImg from "../../assests/OIP.jpg";
import IntroImg from "../../assests/bg.jpg";
import "./x.css";
import MainPageHeader from "./header/header";
import MainPageModal from "../mainPageModal/newPageModal";
import Shaareh_trans from "../../assests/shaareh-transparent.png";
import Aparat from "../../assests/aparat.png";
export default function MainPageIntro(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="intro-div">
      <MainPageHeader setShowModal={setShowModal} showModal={showModal} />
      <MainPageModal setShowModal={setShowModal} showModal={showModal} />
      <div className="Shaareh-big z-3">
        <img
          src={Shaareh_trans}
          alt="yet another shareh"
          className="Shaareh-big-img"
        />
        <div className="  pt-4">
          <div className="">
            <h4 className="text-light text-center">تارگاه شارح</h4>
          </div>
          <div className="row">
            <div className="d-flex flex-row justify-content-around">
              <a
                style={{direction: "ltr"}}
                href="https://www.aparat.com/Farhangi_iust"
                className="link-info "
              >
              <img
              className="pe-1"
                src={Aparat}
                style={{ height: "24px", width: "auto" }}
                alt="aparat"
              />
                @Farhangi_iust
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={IntroImg} alt="intro" className="img-intro" />
    </div>
  );
}
