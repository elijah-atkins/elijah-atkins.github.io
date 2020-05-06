import React from "react";
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {

  return (
    <div className="main">
      <div className="projects">
        <div className="header"><h1>Projects</h1></div>
        <div className="project-grid">
        {projects.map(project => {
            return <ProjectCard project={project} key={project.id}/>
        })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
