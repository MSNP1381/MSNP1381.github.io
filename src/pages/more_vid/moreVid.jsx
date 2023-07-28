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
    setMainItem(cards.pop())
    let t = (
      <MainPagePlaylist
        className=""
        cat_eng={cat_eng}
        title={title}
        cards={cards}
        show_more={false}
        max_cards={1000000000}
      />
    );

    console.log(t);
    setData(t);
  }
  useEffect((_) => {
    getCatVid();
  }, []);
  function get_vid_id(url,with_v=true){
    let x= url.split('/').slice(-1)[0];
    return with_v?'/v/'+x.split('?')[0]:x.split('?')[0];
  }
  return (
    <div className="container pt-2 vw-100 vh-100 ">
      <div className="row top-vid">
       {mainItem&& <div class="h_iframe-aparat_embed_frame">
          <span id="wtf"></span>
      {console.log(mainItem,get_vid_id(mainItem?.vid_url,false))}

          <iframe
          
            src={`https://www.aparat.com/video/video/embed/videohash/${get_vid_id(mainItem?.vid_url,false)}/vt/frame`}
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>}
        <div className="d-flex flex-row justify-content-between pt-2">
          <h4 className="text-light-emphasis">{mainItem?.title}</h4>
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
