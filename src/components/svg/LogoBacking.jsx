import React from "react";

const LogoBacking = ({xBlur}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 280 100">
      <defs>
        <filter id="g_blur" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation={xBlur} result="blur" />
        </filter>
      </defs>
      <path
        fill="currentColor"
        d="M542.18 36.278C392.066 34.451 190.02 60.85 127.506 98.281 57.759 140.041 11.68 207.625 73.139 266.078c86.182 81.966 379.663 82.865 467.864 83.228 154.146.634 297.357-6.617 428.323-81.839 95.572-54.895 102.073-115.1-2.172-125.807-33.27-3.417-122.2 5.747-132.756-11.023-12.157-19.313 29.11-28.52 26.203-45.592-6.281-36.896-258.946-48.043-318.42-48.767z"
        fillRule="evenodd"
        filter="url(#g_blur)"
      />
    </svg>
  );
};

export default LogoBacking;
