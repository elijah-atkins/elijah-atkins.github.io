import React from "react";
import Git from "../svg-react/Git";
import Instagram from "../svg-react/Instagram";
import Twitter from "../svg-react/Twitter";
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
            >
              <Git alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/elijah-atkins-8436741a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkdin alt="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/elijahatkins"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/elijahatkins/"
              target="_blank"
              rel="noopener noreferrer"
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
