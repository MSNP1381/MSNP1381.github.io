import "./style.css";
import React, { useState, useEffect } from "react";
import { lorem } from "./lorem";
import MainPageCard from "../../components/mainPageCard/mainPageCard";
import AllData from "../../assests/result.json";
import Accordion from 'react-bootstrap/Accordion';
function ViewVideo() {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState({});
  const [vids, setVids] = useState([]);
  const [isShown, setIsShown] = useState(true);
  const max_vid_cnt = 2;
  function find_vid_info() {
    const vid_id = window.location.pathname.split("/")[2];
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
  return (
    <div  className="container py-2 vh-100">
      <div className="row vh-100">
        <div className="col-md-6" id="detail">
          {lorem}
        </div>
        <div className="col-md-6 my-auto">
          <div className="row pt-2" id="vid">
            <div class="h_iframe-aparat_embed_frame">
              <span id="wtf"></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/jsPIg/vt/frame"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </div>
          <div className="row"><h6 className="mt-2">{item['title']}</h6></div>
          <div className="row pt-2 my-auto" id="more_vid">
            <Accordion >
              <Accordion.Item>
                <Accordion.Header
                
                  >
                    ویدیو های بیشتر
                </Accordion.Header>

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
