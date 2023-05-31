import React from "react";
import GitClean from "../svg-react/GitClean";
import Instagram from "../svg-react/Instagram";
import Linkdin from "../svg-react/Linkdin";

const Social = (props) => {

  return (
    <div
      className={`social-media-container`}
    >
      <div className={`social-media  ${(props.social) ? "social-open" : "social-close"}`}>
        <h1>Find me on Social Media</h1>
        <span className='close-social' onClick={props.toggle("social")}>
          &times;{" "}
        </span>
        <ul>
          <li>
            <a
              href="https://github.com/elijah-atkins/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elijah Atkins on Github"
            >
              <GitClean alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/elijah-atkins-8436741a6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elijah Atkins on Linkedin"
            >
              <Linkdin alt="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/elijahatkins/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elijah Atkins on Instagram"
            >
              <Instagram alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
