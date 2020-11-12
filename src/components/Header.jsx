import React from "react";
import Raven from "../svg-react/Raven"
import RavenFly from "../svg-react/RavenFly"

const Header = () => {
  return (
    <header className="App-header">
      <div className="intro">
        <h1>Elijah Atkins</h1>
        <p>Full Stack Developer</p>
        <p>Designer</p>
        <p>Animator</p>
      </div>
      <div className="doodle"><Raven /></div>
      <div className="doodle2"><RavenFly /></div>
    </header>
  );
};

export default Header;
