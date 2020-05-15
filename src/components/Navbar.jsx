import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from './svg/Logo'

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
            <svg
              className={
                location.pathname === "/projects"
                  ? "ea-icon ea-active"
                  : "ea-icon"
              }
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0 -275.83)" strokeWidth=".265">
                <path
                  fill="currentColor"
                  d="M18.496 294.827c-.36.337-6.176-2.433-6.665-2.362-.488.071-5.38 4.143-5.817 3.913-.436-.23.33-6.394.106-6.83-.224-.436-5.663-3.688-5.577-4.17.085-.482 6.325-1.774 6.684-2.113.36-.34 1.677-6.547 2.168-6.622.49-.074 3.74 5.636 4.18 5.86.44.224 6.714-.343 6.934.095.219.438-4.11 5.028-4.198 5.511-.088.484 2.545 6.381 2.185 6.718z"
                  className="ea-base"
                />
                <ellipse
                  className="ea-shine"
                  cx="10.814"
                  cy="287.19"
                  rx="2.778"
                  ry="2.761"
                  fill="currentColor"
                  filter="url(#prefix__a)"
                />
              </g>
            </svg>
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              className={
                location.pathname === "/skills"
                  ? "ea-icon ea-active"
                  : "ea-icon"
              }
            >
              <defs>
                <filter
                  height="1.6"
                  y="-.3"
                  width="1.592"
                  x="-.296"
                  id="prefix__a"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>
              </defs>
              <path
                transform="matrix(.93876 0 0 .95287 8.576 6.398)"
                d="M9.883 13c-.704.594-12.337 1.553-13.117 1.06-.78-.495-5.35-11.357-5.117-12.245C-8.118.927.946-6.497 1.863-6.55 2.781-6.602 12.637-.514 12.978.339c.342.854-2.39 12.066-3.095 12.66z"
                fill="currentColor"
                className="ea-base"
              />
              <path
                transform="matrix(.6112 0 0 .57388 6.487 5.48)"
                d="M14.925 15.668c-.292.471-5.74-5.058-6.249-4.843-.53.225-.85 8.01-1.421 8.086-.548.073.24-7.598-.251-7.858C6.49 10.782.08 15.5-.336 15.096c-.398-.387 6.26-4.513 6.155-5.06-.11-.568-7.561-2.776-7.51-3.355.049-.555 7.376 2.2 7.74 1.78C6.43 8.021 3.347.7 3.832.386c.466-.302 3.026 7.11 3.579 7.137.575.028 4.186-6.838 4.734-6.656.526.176-3.676 6.627-3.35 7.078.34.47 8.107-1.01 8.312-.468.197.52-7.64 1.555-7.782 2.09-.148.557 5.903 5.608 5.6 6.1z"
                fill="currentColor"
                className="ea-shine"
                filter="url(#prefix__a)"
              />
            </svg>
            <span className="link-text">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              className={
                location.pathname === "/contact"
                  ? "ea-icon ea-active"
                  : "ea-icon"
              }
            >
              <defs>
                <filter
                  height="2.88"
                  y="-.94"
                  width="2.727"
                  x="-.863"
                  id="prefix__a"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>
              </defs>
              <g transform="translate(0 -275.833)">
                <path
                  d="M20.686 294.062c-.61 1.353-19.452 3.127-20.26 1.888-.81-1.238 7.205-19.463 8.626-19.599 1.42-.136 12.244 16.358 11.634 17.711z"
                  fill="currentColor"
                  className="ea-base"
                />
                <ellipse
                  fill="currentColor"
                  className="ea-shine"
                  ry="2.431"
                  rx="2.646"
                  cy="288.351"
                  cx="10.054"
                  filter="url(#prefix__a)"
                />
              </g>
            </svg>

            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
