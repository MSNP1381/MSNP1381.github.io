import React, { useEffect, useState, lazy, Suspense } from "react";
import MainPageIntro from "../../components/mainPageIntro/mainPageIntro";
import ScrollToBottom from "../../components/ScrollToBottom/ScrollTobottom";
import MainPagePlaylist from "../../components/MainPagePlayList/MainPagePlayList";
import MyData from "../../assests/result.json";
import saebDay from "../../assests/saeb-day.png";
import saebAudio from "../../assests/s.wav";
import Modal from 'react-bootstrap/Modal';

function MainPage(props) {
  const audio = new Audio(saebAudio);

  const [playLists, setPlayLists] = useState();
  function to_categories(data) {
    const d = {};
    
    data.map((item) => {
      const category = item.category;
      let tmp=item.data;
      tmp['cat_eng']=item.category_fing;
      if (category in d) {
        d[category].push(tmp);
      } else {

        d[category] = [tmp];

      }
    });

    return d;
  }

  useEffect((_) => {
    handlePlay();
    let t = to_categories(MyData);
    const keys=Object.keys(t);
    let x=keys.map((key,index) =>{
      return(
        <MainPagePlaylist key={index+500}  title={key} cat_eng={t[key][0]['cat_eng']} cards={t[key]}/>
      )
    })
    setPlayLists(x);
  }, []);
  const [show, setShow] = useState(!false);

  const handleClose = () => {
    // alert("fds")
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setShow(false);
  
  
  }
  const handleShow = () => setShow(true);

  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
    audio.play();
    setIsPlaying(true);
  };

 

  return (
    <div className="m-0 p-0">

    <Modal show={show} onHide={handleClose}  onExit={handleClose} fullscreen={true}
    
    >
        <Modal.Header closeButton   >
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">

        <div className="position-absolute">
        {/* <button className=" btn bg-body position-fixed" style={{top:"3.5rem",right:"3.5rem"}}>x</button> */}

        <img src={saebDay}  className="m-5 rounded-3 h-75" />
        </div>
        </Modal.Body>
        {/* <img src= alt="" className="p-5  "></img> */}

      </Modal>


      <ScrollToBottom />

      <MainPageIntro />

      <div className="container mt-3" id="vid">
        {
        playLists
        
        }
      </div>
    </div>
  );
}
export default MainPage;
