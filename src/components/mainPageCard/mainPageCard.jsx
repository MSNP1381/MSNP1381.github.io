import React from "react";
// import "./style.css";
function MainPageCard({ pic, text, uid, title }) {
  return (
<a href="#" className="text-decoration-none">
<div className="card border-0" style={{background:"transparent"}} >
  <img src={pic} className=" rounded-0 card-img-top" alt={title}/>
  <div className="card-body px-1">
    <p className="card-title link-offset-3-hover">{title}</p>
    <div className="d-flex flex-row justify-content-end">
    <small className="card-subtitle">4 خرداد 1402</small>

    </div>
  </div>
</div>
</a>
  );
}
export default MainPageCard;