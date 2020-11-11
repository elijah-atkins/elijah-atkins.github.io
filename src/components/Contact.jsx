import React from "react";
import Social from "../svg-react/Social";
import ContactForm from "./ContactForm";

const Contact = ({ contact, toggle, success }) => {
  return (
    <div className={`content-wrap ${contact ? "on" : "off"}`}>
      <div className="close-panel" onClick={toggle("contact")}>
        <div className="close-panel-button">{"<"} </div>
      </div>
      <div className="contact-content">
      <div className="contact-intro">
        <h2>Hey Let's Connect</h2>
      </div>
      <div className="contact-form">
        <ContactForm toggle={toggle} success={success} />
      </div>
      <div className="social-icon">
        <div onClick={toggle("social")}>
          <Social />
        </div>
        <div className="contact-bottom">
          <p>Prefer to connect on social media?</p>
        </div></div>
      </div>
    </div>
  );
};

export default Contact;
