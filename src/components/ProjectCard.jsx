import React from "react";
import Projects from "./Projects";

const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      <div className="project-item">
        <div className="project-img">
          
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
