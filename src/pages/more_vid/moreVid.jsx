import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import VidData from "../../assests/result.json";
import "./style.css";
import MainPagePlaylist from "../../components/MainPagePlayList/MainPagePlayList";
function MoreVid(props) {
  const navigate = useNavigate();
  const cat_eng = window.location.pathname.split("/")[2];
  const [data, setData] = useState();
  const [mainItem, setMainItem] = useState();
  function getCatVid() {
    let title = "";
    const cards = [];
    VidData.forEach((x) => {
      if (x.category_fing === cat_eng) {
        title = x.category;
        cards.push(x.data);
      }
    });
    if (cards.length<=0){navigate("/error-page")}
    setMainItem(cards[0])
    let t = (
      <MainPagePlaylist
        className=""
        cat_eng={cat_eng}
        title={title}
        cards={cards}
        show_more={false}
      />
    );

    console.log(t);
    setData(t);
  }
  useEffect((_) => {
    getCatVid();
  }, []);
  function get_vid_id(url){
    let x= url.split('/').slice(-1)[0];
    return '/v/'+x.split('?')[0];
  }
  return (
    <div className="container pt-2 vw-100 vh-100 ">
      <div className="row top-vid">
        <div class="h_iframe-aparat_embed_frame">
          <span id="wtf"></span>
          <iframe
            src="https://www.aparat.com/video/video/embed/videohash/jsPIg/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
        <div className="d-flex flex-row justify-content-between pt-2">
          <h5>{mainItem?.title}</h5>
          <a
            href={mainItem?get_vid_id(mainItem?.vid_url):""}
            className="link-underline-info"
            style={{ fontSize: ".9rem" }}
          >
            صفحه ویدیو
            <i className="bi bi-chevron-left" style={{ fontSize: ".7rem" }}></i>
          </a>
        </div>
      </div>
      <div className="row">{data}</div>
    </div>
  );
}
export default MoreVid;
