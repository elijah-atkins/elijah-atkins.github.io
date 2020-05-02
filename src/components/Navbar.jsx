import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li class="nav-item">
          <a href="#" className="nav-link">
            <span class="logo-text logo">Elijah Atkins</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21.167 21.167"
              class="ea-icon-logo"
            >
              <path
                d="M1.282.9c-.847.35 4.446 9.192 4.416 9.928-.03.736-5.618 9.51-4.786 9.879.832.368 7.233-5.727 7.938-6.229.752-.536 2.937-2.708 2.951-3.444.014-.735-1.662-2.753-2.453-3.573C8.775 6.866 2.13.549 1.282.9z"
                fill="currentColor"
                class="ea-base-logo"
              />
              <path
                d="M10.243 20.835c-.809-.364 4.245-9.515 4.216-10.276-.028-.762-5.925-9.215-5.131-9.596.794-.382 7.468 5.298 8.141 5.818.719.554 2.805 2.803 2.818 3.564.013.761-1.587 2.85-2.342 3.699-.548.616-6.893 7.154-7.702 6.79z"
                fill="currentColor"
                class="ea-shine-logo"
              />
            </svg>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link">
            <svg
              class="ea-icon"
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
                  class="ea-base"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              class="ea-icon"
            >
              <defs>
                <filter
                  height="1.6"
                  y="-.3"
                  width="1.592"
                  x="-.296"
                  id="prefix__a"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>
              </defs>
              <path
                transform="matrix(.93876 0 0 .95287 8.576 6.398)"
                d="M9.883 13c-.704.594-12.337 1.553-13.117 1.06-.78-.495-5.35-11.357-5.117-12.245C-8.118.927.946-6.497 1.863-6.55 2.781-6.602 12.637-.514 12.978.339c.342.854-2.39 12.066-3.095 12.66z"
                fill="currentColor"
                class="ea-base"
              />
              <path
                transform="matrix(.6112 0 0 .57388 6.487 5.48)"
                d="M14.925 15.668c-.292.471-5.74-5.058-6.249-4.843-.53.225-.85 8.01-1.421 8.086-.548.073.24-7.598-.251-7.858C6.49 10.782.08 15.5-.336 15.096c-.398-.387 6.26-4.513 6.155-5.06-.11-.568-7.561-2.776-7.51-3.355.049-.555 7.376 2.2 7.74 1.78C6.43 8.021 3.347.7 3.832.386c.466-.302 3.026 7.11 3.579 7.137.575.028 4.186-6.838 4.734-6.656.526.176-3.676 6.627-3.35 7.078.34.47 8.107-1.01 8.312-.468.197.52-7.64 1.555-7.782 2.09-.148.557 5.903 5.608 5.6 6.1z"
                fill="currentColor"
                class="ea-shine"
                filter="url(#prefix__a)"
              />
            </svg>
            <span class="link-text">Skills</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              class="ea-icon"
            >
              <defs>
                <filter
                  height="2.88"
                  y="-.94"
                  width="2.727"
                  x="-.863"
                  id="prefix__a"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>
              </defs>
              <g transform="translate(0 -275.833)">
                <path
                  d="M20.686 294.062c-.61 1.353-19.452 3.127-20.26 1.888-.81-1.238 7.205-19.463 8.626-19.599 1.42-.136 12.244 16.358 11.634 17.711z"
                  fill="currentColor"
                  class="ea-base"
                />
                <ellipse
                  fill="currentColor"
                  class="ea-shine"
                  ry="2.431"
                  rx="2.646"
                  cy="288.351"
                  cx="10.054"
                  filter="url(#prefix__a)"
                />
              </g>
            </svg>

            <span class="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
