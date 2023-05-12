import React from "react";
import ProjectCard from "./ProjectCard";
import project from "./projects.js";


const Splash = () => {
  return (
    <div className="splash-wrap">
      <div className="splash-bg">
        <div className="splash-header">Recent Project</div>
        <div className="splash-body">
        <ProjectCard project={project[0]}></ProjectCard>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Splash;
