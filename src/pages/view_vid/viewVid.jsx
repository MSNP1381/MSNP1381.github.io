import "./style.css";
import React, { useState, useEffect,useRef } from "react";
import MainPageCard from "../../components/mainPageCard/mainPageCard";
import AllData from "../../assests/result.json";
import Accordion from "react-bootstrap/Accordion";
import myHTML from "../../assests/x2.html";


function ViewVideo() {

  const vidRef = useRef();
  const vid_id = window.location.pathname.split("/")[2];

  const [category, setCategory] = useState("");
  const [item, setItem] = useState({});
  const [vids, setVids] = useState([]);
  // const [isShown, setIsShown] = useState(true);
  const max_vid_cnt = 2;
  function find_vid_info() {
    AllData.forEach((x) => {
      const vid_url = x.data.vid_url;
      if (vid_url.includes(vid_id)) {
        setCategory(x.category);
        setItem(x.data);
      }
    });
  }
  useEffect((_) => {
    find_vid_info();
    vidRef.current.addEventListener('timeupdate', () => {
      console.log(vidRef.current.currentTime);
    });
  }, []);
  useEffect(
    (_) => {
      let cnt = 0;
      let l = [];
      AllData.some((x) => {
        if (x.category == category) {
          l.push(x.data);
          cnt++;
        }
        if (cnt >= max_vid_cnt) return true;
        return false;
      });
      setVids(l);

    },
    [category]
  );
    function vid_loaded(){
    }
  return (
    <div className=" py-2 vh-100">
      <div className=" row vh-100  ">
        <div className="col-md-6  bg-dark-subtle" id="detail">
          <div className="d-none" dangerouslySetInnerHTML={{ __html:  myHTML }} style={{maxHeight:'100vh',overflow:"scroll"}}></div>
        </div>
        <div className="col-md-6 my-auto">
          <div className="row pt-2" id="vid">
            <div class="h_iframe-aparat_embed_frame">
              <span id="wtf"></span>
              <iframe
              ref={vidRef}
                id="video-player"
                src={`https://www.aparat.com/video/video/embed/videohash/${vid_id}/vt/frame`}
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                frameBorder="0"
                onTimeUpdate={()=>console.log("dsaf")}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <h5 className="mt-2">
              <b>{item["title"]}</b>
            </h5>
          </div>
          <div className="row pt-2 my-auto" id="more_vid">
            <Accordion>
              <Accordion.Item>
                <Accordion.Header style={{fontFamily: "vazir"}}>ویدیو های بیشتر</Accordion.Header>

                <Accordion.Body>
                  <div className="row">
                    {console.log(AllData)}
                    {vids?.map((x) => {
                      return (
                        <div className="col-md-6">
                          <MainPageCard
                            index={1}
                            pic={x.poster}
                            title={x.title}
                            vid_url={x.vid_url}
                            info={x.info}
                          ></MainPageCard>
                        </div>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewVideo;
