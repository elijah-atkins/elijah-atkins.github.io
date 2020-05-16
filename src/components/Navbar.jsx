import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from './svg/Logo';
import NavItem from './svg/NavItem';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item logo">
          <Link to="/" className="nav-link logo">
            <span className="logo-text logo">
              <h1>
                Elijah <br></br>Atkins
              </h1>
            </span>

          <Logo />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" active="true">
          <NavItem path={location.pathname} target={'/projects'}/>
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">
          <NavItem path={location.pathname} target={'/skills'}/>
            <span className="link-text">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
          <NavItem path={location.pathname} target={'/contact'}/>

            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
