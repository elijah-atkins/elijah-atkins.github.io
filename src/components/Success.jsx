import React from "react";

const Success = ({ toggle, error }) => {
  return (
    <div className="success-wrap">
      {error ? (
              <div className="contact-error">
`error: ${error}`
              </div>
      ) : (
        <div className="success-text">
          <p>Thank you</p>
          <p>Message successfully sent!</p>
          <p>Elijah will get back to you soon.</p>
        </div>
      )}

      <div className="success-close">
        <button onClick={toggle("success")}>OK</button>
      </div>
    </div>
  );
};

export default Success;
