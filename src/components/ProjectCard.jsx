import React from "react";
import web from "../svg/globe-solid.svg";
import git from "../svg/github-brands.svg";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-border">
        <div className="project-item">

          <div
            className="project-img"
            style={{ backgroundImage: `url(${project.img})` }}
          ></div>
          <ul className="project">
            <li>
              <a className="p-link" href={project.url}><h1>{project.title}</h1></a>
            </li>

            <li>
              <div className="project-icons">
                <a href={project.url}>
                  <img src={web} alt="Deployed Site"></img>
                </a>

                <a href={project.git}>
                  <img src={git} alt="Github Source"></img>
                </a>
              </div>
            </li>

            <li>
              <p>{project.description}</p>
            </li>

          </ul>
          </div>
          <div className="project-list">
          <ul className="bullet-item">
          {project.bullet.map((bulletPoint, key) => {
                return (
                    <li key={key}>
                      <p>{bulletPoint}</p>
                    </li>
                );
              })}
              </ul>
              </div>
        </div>
        
      </div>

  );
};

export default ProjectCard;
