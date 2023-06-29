import React from "react";
// import "./style.css";
import MainPageCard from '../mainPageCard/mainPageCard';
import {ICardInfo} from "../../ICardInfo";
interface IPlayList{
  title:string;
  cards:ICardInfo[];
}
function MainPagePlaylist({title,cards}:IPlayList) {
    const c=[1,2,3,4,5,6,7]
  return (
    <div className="row my-2">
      <div className="mb-2 d-flex justify-content-between">
        <h6 className="text-light-emphasis fs-6">{title}</h6>
        <a href="#" className="link-underline-info link-info" style={{fontSize:'.9rem'}}>بیشتر<i className="bi bi-chevron-left" style={{fontSize:'.7rem'}}></i></a>
      </div>
      <div className="row overflow-x-scroll my-1">
        {cards?.slice(0,4).map((x,index)=>{

        return (<div className="col-3">
            <MainPageCard pic={x.poster} title={x.title} info={x.info} key={index+100} index={index} vid_url={x.vid_url}  ></MainPageCard>

        </div>)

        })}

      </div>
      <hr/>
    </div>
  );
}
export default MainPagePlaylist;
