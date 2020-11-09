import React from "react";
import Web from "../svg-react/Web";
import Git from "../svg-react/Git";



const ProjectCard = ({ project }) => {
  const getRand = (n) => {
    return Math.floor(Math.random() * n)-(n*0.5)
  }
  return (
    <div className="project-card" style={{
      transform: `rotate(${getRand(1)}deg)`
    }}>
      <div className="project-border">
        <div className="project-item">
          <div
            className="project-img"
            style={{ backgroundImage: `url(${project.img})`
          }}
          ></div>
          <ul className="project">
            <li>
              <h1>{project.title}</h1>
            </li>

            <li>
              <div className="project-icons">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Deployed Site"
                >
                  <div className="project-icon">
                    <Web />
                  </div>
                </a>

                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Github Source"
                >
                  <div className="project-icon">
                    <Git />
                  </div>
                </a>
              </div>
            </li>

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
