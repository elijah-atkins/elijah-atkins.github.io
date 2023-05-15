import React from "react";
import Raven from "../svg-react/Raven"
import RavenFly from "../svg-react/RavenFly"
import logo from '../logo.svg'

const Header = () => {
  return (
    <header className="App-header">
      <div className="intro">
        <img src={logo} className="App-logo" alt="logo"/>
        <div className="intro-text">

          <p>Technical Artist</p>
          <p>Developer</p>
          <p>Designer</p>
          <p>Animator</p>
        </div>
      </div>
      <div className="doodle"><Raven /></div>
      <div className="doodle2"><RavenFly /></div>
    </header>
  );
};

export default Header;
