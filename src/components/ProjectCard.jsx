import React from "react";
import nasa from "../img/nasa.png"


const ProjectCard = ({ project }) => {
    console.log(project.img)
  return (
    <div className="project-card">
      <div className="project-item">
        <div className="project-img" style={{backgroundImage:`url(${project.img})`,backgroundSize:420, backgroundPositionX:-50,backgroundPositionY:-50}}>
          
        </div>
        <ul className="project">
        <li>
        <h1 className="title">{project.title}</h1>
        </li>
        <li>
        <a href={project.url}>Deployed site</a>
        </li>
        <li>
        <a href={project.git}>Github Source</a>
        </li>
        <li>
        <p>{project.description}</p>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
