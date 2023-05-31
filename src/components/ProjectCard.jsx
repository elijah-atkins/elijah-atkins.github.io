import React from "react";
import Web from "../svg-react/Web";
import Git from "../svg-react/Git";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="project-card"
      style={{
        transform: `rotate(${project.rot}deg)`,
      }}
    >
      <div className="project-border">
        <div className="project-item">
          <div
            className="project-img"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            {" "}
            <div className="project-icons">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Deployed Site"
                  aria-label={"Deployed Site for " + project.title}
                >
                  <div className="project-icon">
                    <Web />
                  </div>
                </a>
              ) : null}
              {project.git ? (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Github Source"
                  aria-label={"Github Source for " + project.title}
                >
                  <div className="project-icon">
                    <Git />
                  </div>
                </a>
              ) : null}
            </div>
          </div>
          <ul className="project">
            <li>
              <h1>{project.title}</h1>
            </li>

            <li></li>

            <li>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
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
