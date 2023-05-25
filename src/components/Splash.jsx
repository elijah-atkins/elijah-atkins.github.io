import React from "react";
import ThreeScene from "./ThreeScene";

const Splash = () => {
  return (
    <div className="splash-wrap">
      <div className="splash-bg">
        <div className="splash-header">&ensp;</div>
        <div className="splash-body">
          <div className="project-card">
            <div className="project-border">
              <ThreeScene />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
