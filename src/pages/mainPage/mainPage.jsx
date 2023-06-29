import React, { useEffect, useState, lazy, Suspense } from "react";
import MainPageIntro from "../../components/mainPageIntro/mainPageIntro";
import ScrollToBottom from "../../components/ScrollToBottom/ScrollTobottom";
import MainPagePlaylist from "../../components/MainPagePlayList/MainPagePlayList";
import MyData from "../../assests/result.json";

function MainPage(props) {
  const [playLists, setPlayLists] = useState();
  function to_categories(data) {
    const d = {};
    
    data.map((item) => {
      const category = item.category;
      if (category in d) {
        d[category].push(item.data);
      } else {
        d[category] = [item.data];
      }
    });

    return d;
  }

  useEffect((_) => {
    let t = to_categories(MyData);
    const keys=Object.keys(t);
    let x=keys.map((key,index) =>{
      return(
        <MainPagePlaylist key={index} title={key} cards={t[key]}/>
      )
    })
    setPlayLists(x);
  }, []);

  return (
    <div className="m-0 p-0">
      <ScrollToBottom />

      <MainPageIntro />

      <div className="container mt-3" id="vid">
        {
        playLists
        
        }
      </div>
    </div>
  );
}
export default MainPage;
