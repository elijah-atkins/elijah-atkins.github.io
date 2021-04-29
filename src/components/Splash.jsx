import React from "react";


const Splash = () => {
  return (
    <div className="splash-wrap">
      <div className="splash-bg">
        <div className="splash-header"> Demo Reel</div>
        <div className="video-container">
        <iframe
            height= "315"
            width= "560"
          src="https://www.youtube.com/embed/C2nZHoMHdhk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Splash;
