import React from "react";
import recent from "../img/game-of-life.png";
import Git from "../svg-react/Git";

const Splash = () => {
  return (
    <div className="splash-wrap">
      <div className="splash-bg">
        <div className="splash-header"> Recent Project </div>
        <div className="splash-border">
          <div className="splash-body">
            {" "}
            <div className="splash-title">
              <h1>Conway's Game of Life</h1>
              <a
                href="https://github.com/elijah-atkins/game-of-life"
                alt="View source code on Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Git />
              </a>
            </div>
            <div className="splash-img">
              <a
                href="https://game-of-life.elijahatkins.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={recent} alt="recent project"></img>
              </a>
            </div>
            <div className="splash-description">
              <p>
                {" "}
                This single page web app was made with touch screens in mind.
                Featuring large buttons with enough space for a fingers to
                navigate. With a scaleable cell size which allows users to zoom
                in to place live cells. Built using React and JavaScript. Game
                board and Cells are generated with CSS styling
              </p>
            </div>
            <div className="splash-bullet">
              <ul>
                <li>
                  Create an initial configuration and observe how it evolves.
                </li>
                <li>Beautiful visualization of classic cellular automaton</li>
                <li>Responsive game board will resize with window!</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Splash;
