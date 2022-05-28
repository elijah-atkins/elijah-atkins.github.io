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

{/* <iframe
    height= "315"
    width= "560"
  src="https://www.youtube.com/embed/C2nZHoMHdhk"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe> */}