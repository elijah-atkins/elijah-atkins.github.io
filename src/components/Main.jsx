import React from "react";
import elijah from "../img/elijah-atkins.png";
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <div className="main">
      <div className="splash-border">
        <div className="splash">
          <div className="logo-header">
            <div className="logo-text">
              <h1>Elijah Atkins</h1>
            </div>
            <h2>Coder | Designer | Developer</h2>
            <Link to="/contact" className="nav-link"><h2>elijah.the.atkins@gmail.com</h2></Link> 
          </div>
          <div className="profile-picture">
            <div className="profile">
              <img
                className="profile-pic"
                src={elijah}
                alt="Elijah Atkins"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
