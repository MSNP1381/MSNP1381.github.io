import React, { useState } from "react";
// import IntroImg from "../../assests/OIP.jpg";
import IntroImg from "../../assests/bg.jpg";
import "./x.css";
import MainPageHeader from "./header/header";
import MainPageModal from "../mainPageModal/newPageModal";
import Shaareh_trans from "../../assests/shaareh-transparent.png";
export default function MainPageIntro(props) {
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(false);
  return (
    <div className="intro-div">
      <MainPageHeader setShowModal={setShowModal} showModal={showModal} setContent={setContentModal} />
      <MainPageModal setShowModal={setShowModal} showModal={showModal} content={contentModal} />
      <div className="Shaareh-big z-2">
        <img
          src={Shaareh_trans}
          alt="yet another shareh"
          className="Shaareh-big-img"
        />
        <div className="  pt-4">
          <div className="">
            <h4 className="text-light text-center">تارگاهِ شرحِ شعرِ فارسی</h4>
          </div>
        </div>
      </div>
      <div className="introImg-div">

      <img src={IntroImg} alt="intro" className={`img-intro ${window.innerHeight>window.innerWidth?'h-fit':"w-fit"}`} />
      </div>
    </div>
  );
}
