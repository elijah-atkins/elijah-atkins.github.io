import React from "react";

const NavItem = ({ path, target }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={path === target ? "ea-icon ea-active" : "ea-icon"}
      viewBox="0 0 100 100"
    >
      <defs>
        <filter id="nav_blur" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite
            in="SourceGraphic"
            in2="blur"
            operator="atop"
            result="composite1"
          />
          <feComposite in2="composite1" operator="in" result="composite2" />
          <feComposite in2="composite2" operator="in" result="composite3" />
        </filter>
      </defs>

      <path
        className="ea-base"
        d="M80.956 93.062c-4.488 3.384-51.402 4.037-56.014.819-4.61-3.218-19.96-46.751-18.263-52.087C8.375 36.458 46.075 7.765 51.672 7.633c5.598-.132 43.364 26.14 45.268 31.4 1.905 5.262-11.495 50.644-15.984 54.029z"
        //d="M80.956 93.062l-28.009.79-28.005.029-8.515-26.528-9.748-25.56 22.776-17.329L51.672 7.633l22.534 16.116L96.94 39.034l-7.41 26.919z"
        fill="currentColor"
      />
      <path
        d="M52 8.688c4.169-.059 3.384 39.119 6.787 41.567 3.403 2.448 39.86-12.48 41.213-8.532C98.75 45.67 61.49 56.525 60.2 60.548c-1.21 4.022 23.705 34.351 20.4 36.908-3.303 2.557-25.307-29.36-29.507-29.229-4.2.13-25.722 32.641-29.115 30.22-3.394-2.42 20.542-33.356 19.134-37.295-1.407-3.94-39.436-13.84-38.212-17.854 1.224-4.014 38.115 9.53 41.442 6.996 3.327-2.532.806-41.547 4.975-41.606z"
        className="ea-shine"
        fill="currentColor"
        filter="url(#nav_blur)"
      />

  
    </svg>
  );
};

export default NavItem;
