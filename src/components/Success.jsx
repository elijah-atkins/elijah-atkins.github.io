import React from "react";

const Success = ({ toggle }) => {
  return (
      <div className="success-wrap">
          <div className="success-text">
              <p>Thank you</p>
             <p>Message successfully sent!</p> 

          </div>
          <div className="success-close">
              <button onClick={toggle("success")}>OK</button>
          </div>
      </div>
  )};

  export default Success;