import React from "react";
import web from '../svg/globe-solid.svg';
import git from '../svg/github-brands.svg';

const ProjectCard = ({ project }) => {
    console.log(project.img)
  return (
    <div className="project-card">
      <div className="project-item">
        <div className="project-img" style={{backgroundImage:`url(${project.img})`}}>
          
        </div>
        <ul className="project">
        <li>
        <h1 className="title">{project.title}</h1>
        </li>

        <li>
        <div className='project-icons'>
        <a href={project.url}><img src={web} alt="Deployed Site"></img></a>

        <a href={project.git}><img src={git} alt="Github Source"></img></a>
        </div>
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
