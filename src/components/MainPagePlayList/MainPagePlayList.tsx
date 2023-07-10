import React from "react";
import "./style.css";
import MainPageCard from "../mainPageCard/mainPageCard";
import { ICardInfo } from "../../ICardInfo";
interface IPlayList {
  title: string;
  cat_eng: string;
  cards: ICardInfo[];
  max_cards?: number;
  show_more?: boolean;
}
function MainPagePlaylist({ title, cat_eng, cards,max_cards=4 ,show_more=true}: IPlayList) {
  return (
    <div className="row my-2">
      <div className="mb-2 d-flex justify-content-between">
        <h6 className="text-light-emphasis fs-6">{`${title}`}</h6>
        <a
          href={`/p/${cat_eng}`}
          className={`link-underline-info link-info ${!show_more&&"d-none"}`}
          style={{ fontSize: ".9rem" }}
        >
          بیشتر
          <i className="bi bi-chevron-left" style={{ fontSize: ".7rem" }}></i>
        </a>
      </div>
      <div className="row overflow-x-scroll my-1">
        {cards?.slice(0, max_cards).map((x, index) => {
          return (
            <div className="col-md-3">
              <MainPageCard
                pic={x.poster}
                title={x.title}
                info={x.info}
                key={index + 100}
                index={index}
                vid_url={x.vid_url}
              ></MainPageCard>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
export default MainPagePlaylist;
