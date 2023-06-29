import React from "react";
import "./style.css";
import {convertToPersianNumber} from '../../utils/utils';
interface IMainPageCard{
  pic:string;  title :string;info:string;index:number;vid_url:string;
}
function MainPageCard({ pic,  title,info ,index,vid_url}:IMainPageCard) {
  function get_vid_id(url:string){
    let x= url.split('/').slice(-1)[0];
    return '/v/'+x.split('?')[0];
  }
  return (
<a href={get_vid_id(vid_url)} className="text-decoration-none">
<div className="card border-0" style={{background:"transparent"}} >
  <div className="position-relative">
  <img src={pic} className=" rounded-0 card-img-top" alt={title}/>

  <p className="my-index my-1">
    <span>
    {convertToPersianNumber(index+1)}
    </span>
    </p>
  </div>
  <div className="card-body px-1">
    <p className="card-title link-offset-3-hover my-text ">{title}</p>
    <div className="d-flex flex-row justify-content-end">
    <small className="card-subtitle my-small">{info}</small>

    </div>
  </div>
</div>
</a>
  );
}
export default MainPageCard;