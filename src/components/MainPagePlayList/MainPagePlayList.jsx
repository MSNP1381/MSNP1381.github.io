import React from "react";
// import "./style.css";
import MainPageCard from '../mainPageCard/mainPageCard';
function MainPagePlaylist(props) {
    const c=[1,2,3,4,5,6,7]
  return (
    <div className="row my-2">
      <div className="mb-2 d-flex justify-content-between">
        <h6 className="text-light-emphasis fs-6">حافظ شناسی</h6>
        <a href="#" className="link-underline-info link-info" style={{fontSize:'.9rem'}}>بیشتر<i class="bi bi-chevron-left" style={{fontSize:'.7rem'}}></i></a>
      </div>
      <div className="row overflow-x-scroll my-1">
        {c.slice(0,4).map(x=>{

        return (<div className="col-3">
            <MainPageCard pic={"https://placehold.co/96x64"} title={`${x} فکر ضایب `} ></MainPageCard>
        </div>)

        })}

      </div>
      <hr/>
    </div>
  );
}
export default MainPagePlaylist;
