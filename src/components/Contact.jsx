import React from "react";
import Social from "../svg-react/Social"
import ContactForm from "./ContactForm";

const Contact = (props) => {
  return(
  <div className={`contact-wrap ${(props.contact)?"on":"off"}`}>
        <div className="close-panel" onClick={props.toggle("contact")}>
      <div className="close-panel-button" >{" "}>{" "}</div></div>
      <div className="contact-intro">
      <p>Elijah is available to take on new projects</p>
      <p> Use the following form to send Elijah a message.</p>
      </div>
    <div className="contact-form">
    <ContactForm /></div>
    <div className="social-icon" >
      <div onClick={props.toggle("social")}>
    <Social /></div>
    </div>
  </div>
  )
};

export default Contact;
