import React from "react";

import ProjectSearch from './ProjectSearch';

const Projects = ({ projects }) => {

  return (
    <div className="main">
      <div className="projects">
        <div className="p-header">
        <h1>Projects</h1></div>
        <ProjectSearch projects={projects} />

      </div>
    </div>
  );
};

export default Projects;
