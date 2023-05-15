import React from "react";
import SettingsIcon from "../svg-react/SettingsIcon";
import About from "../svg-react/About";
import Tools from "..//svg-react/Tools";
import Rigging from "../svg-react/Rigging";
import Games from "../svg-react/Games";
import Social from "../svg-react/Social";

class Nav extends React.Component {


  render() {
    return (
      <>
      <div className={`nav-tint ${( this.props.about || this.props.games ||  this.props.tools ||  this.props.rigs || this.props.contact ) ? "on" : "off"}`}>{" "}</div>
      <nav className={`nav ${this.props.open ? "open" : "close"}`}>

        <ul>
          <li>
            <div className={`nav-wrap about ${(this.props.about) ? "active" : null}`} onClick={this.props.toggleNav("about")} alt="about">
              {" "}
              <div className="nav-icon" > </div>{" "}
              <div className="icon-svg">
                {" "}
                <About />
              </div>{" "}
              <div className="icon">About</div>{" "}
            </div>
          </li>

          <li>
            <div className={`nav-wrap gallery ${(this.props.rigs) ? "active" : null}`}  alt="rigs" onClick={this.props.toggleNav("rigs")}>
              {" "}
              <div className="nav-icon"> </div>{" "}
              <div className="icon-svg">
                {" "}
                <Rigging />
              </div>{" "}
              <div className="icon">Animation Rigs</div>{" "}
            </div>
          </li>

          <li>
            <div className={`nav-wrap gallery ${(this.props.tools) ? "active" : null}`}  alt="tools" onClick={this.props.toggleNav("tools")}>
              {" "}
              <div className="nav-icon"> </div>{" "}
              <div className="icon-svg">
                {" "}
                <Tools />
              </div>{" "}
              <div className="icon">Tools</div>{" "}
            </div>
          </li>

                    <li>
            <div className={`nav-wrap gallery ${(this.props.games) ? "active" : null}`}  alt="games" onClick={this.props.toggleNav("games")}>
              {" "}
              <div className="nav-icon"> </div>{" "}
              <div className="icon-svg">
                {" "}
                <Games />
              </div>{" "}
              <div className="icon">Games</div>{" "}
            </div>
          </li>

          <li>
            <div className={`nav-wrap ${(this.props.contact) ? "active" : null}`}  alt="contact" onClick={this.props.toggleNav("social")} >
              {" "}
              <div className="nav-icon"> </div>{" "}
              <div className="icon-svg">
                {" "}
                <Social />
              </div>{" "}
              <div className="icon">Social Media</div>{" "}
            </div>
          </li>

        </ul>
        <div className="close-menu" onClick={this.props.toggle("open")}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 135.467 135.467"
            className={`settings-icon ${
              this.props.open ? "open-rot" : "close-rot"
            }`}
          >
            <SettingsIcon open={this.props.open} />
          </svg>
        </div>
      </nav>
      </>
    );
  }
}

export default Nav;
