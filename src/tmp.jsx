import React from "react";
import ReactPlayer from "react-player";
function Tmp(){
    return(<div>
        <ReactPlayer
            url="https://www.aparat.com/v/4yeLu"
            onPlay={() => console.log('Video started playing')}
            onPause={() => console.log('Video paused')}
            onEnded={() => console.log('Video ended')}
            onProgress={(progress) => console.log(`Current time: ${progress.playedSeconds}`)}
        />
    </div>)
}
export default Tmp;