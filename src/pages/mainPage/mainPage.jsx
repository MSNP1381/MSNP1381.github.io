import React from "react";
import MainPageIntro from "../../components/mainPageIntro/mainPageIntro";
import MainPagePlaylist from "../../components/MainPagePlayList/MainPagePlayList";
import ScrollToBottom from "../../components/ScrollToBottom/ScrollTobottom";
function MainPage(props) {
  return (
    <div className="m-0 p-0">

        {/* <ScrollToBottom/> */}

      <MainPageIntro />

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
    <div className="container mt-3" id="vid">

<div className="row"><MainPagePlaylist></MainPagePlaylist></div>
<div className="row"><MainPagePlaylist></MainPagePlaylist></div>
<div className="row"><MainPagePlaylist></MainPagePlaylist></div>
<div className="row"><MainPagePlaylist></MainPagePlaylist></div>

    </div>
    </div></div>
  );
}
export default MainPage;
