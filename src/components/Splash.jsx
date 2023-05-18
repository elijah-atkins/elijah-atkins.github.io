import React from "react";
import ThreeModel from './ThreeModel';

const Splash = () => {
  return (
    <div className="splash-wrap">
      <div className="splash-bg">
        <div className="splash-header">Elijah Atkins</div>
        <div className="splash-body">
          <div className="project-card">
            <div className="project-border">
              <ThreeModel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
