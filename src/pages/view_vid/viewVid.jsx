import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import MainPageCard from "../../components/mainPageCard/mainPageCard";
import AllData from "../../assests/result.json";
import Accordion from "react-bootstrap/Accordion";
import myHTML from "../../assests/parsed_html.html";
import { useLocation } from "react-router-dom";

function ViewVideo() {
  const vidRef=useRef(<video/>);
  const location = useLocation();
  const vid_id = window.location.pathname.split("/")[2];

  const [category, setCategory] = useState("");
  const [item, setItem] = useState({});
  const [vids, setVids] = useState([]);
  const max_vid_cnt = 8;

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
  }, []);

  useEffect(
    (_) => {
      let cnt = 0;
      let l = [];
      AllData.some((x) => {
        if (x.category === category) {
          l.push(x.data);
          cnt++;
        }
        return cnt >= max_vid_cnt;

      });
      setVids(l);
    },
    [category]
  );
  useEffect(() => {
    console.log(location.hash);
  }, [location.hash]);

  return (
    <div className="py-2 vh-100" style={{minHeight:"100vh"}}>
      <div className=" row pb-2" style={{minHeight:"100vh"}}>
        <div className="col-md-6  bg-dark-subtle order-2 order-md-1 pb-3" id="detail">
          {vid_id==="tRhOI"&& <div
            className="no-under link-light "
            dangerouslySetInnerHTML={{ __html: myHTML }}
            style={{
              maxHeight: "100vh",
              overflow: "scroll",
              textDecoration: "none",
            }}
          ></div>}
        </div>
        <div className="col-md-6 my-auto order-1 order-md-2 pb-3 p-md-0 ">
          <div className="row pt-2" id="vid">
            <div className="h_iframe-aparat_embed_frame">
              <span id="wtf"></span>
              <video src={item['vid_down_url']}   />
            </div>
          </div>
          <div className="row">
            <h5 className="mt-2">
              <b>{item["title"]}</b>
            </h5>
          </div>
          <div className="row pt-2 my-auto" id="more_vid">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ fontFamily: "vazir" }}>
                  ویدیو های بیشتر
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    className="row overflow-scroll"
                    style={{ fontFamily: "vazir", maxHeight: "200px" }}
                  >
                    {vids?.map((x) => {
                      return (
                        <div className="col-md-6">
                          <MainPageCard
                            style={{ fontFamily: "vazir !important" }}
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
