import React from "react";
import ProjectCard from './ProjectCard';
import ProjectSearch from './ProjectSearch';

const Projects = ({ projects }) => {

  return (
    <div className="main">
      <div className="projects">
        <div className="p-header"><h1>Projects</h1>
        <ProjectSearch /></div>
        <div className="project-grid">
        {projects.map(project => {
            return (<ProjectCard project={project} key={project.id}/>)
        })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
