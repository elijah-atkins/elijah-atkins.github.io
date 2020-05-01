import React from "react";
import star from "../svg/star.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li class="nav-item">
          <a href="#" className="nav-link">
            <span class="link-text">Elijah Atkins</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link">
            <svg
              class="svg-inline ea-star-icon"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  id="prefix__a"
                  x="-.897"
                  y="-.903"
                  width="2.8"
                  height="2.8"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation="2.077" />
                </filter>
              </defs>
              <g transform="translate(0 -275.83)" stroke-width=".265">
                <path
                  fill="currentColor"
                  d="M18.496 294.827c-.36.337-6.176-2.433-6.665-2.362-.488.071-5.38 4.143-5.817 3.913-.436-.23.33-6.394.106-6.83-.224-.436-5.663-3.688-5.577-4.17.085-.482 6.325-1.774 6.684-2.113.36-.34 1.677-6.547 2.168-6.622.49-.074 3.74 5.636 4.18 5.86.44.224 6.714-.343 6.934.095.219.438-4.11 5.028-4.198 5.511-.088.484 2.545 6.381 2.185 6.718z"
                  class="ea-star"
                />
                <ellipse
                  class="ea-shine"
                  cx="10.814"
                  cy="287.19"
                  rx="2.778"
                  ry="2.761"
                  fill="currentColor"
                  filter="url(#prefix__a)"
                />
              </g>
            </svg>
            <span class="link-text">Projects</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link">
            <span class="link-text">Skills</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link">
            <span class="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
