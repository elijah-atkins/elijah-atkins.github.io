import React from "react";
import Social from "../svg-react/Social"
import ContactForm from "./ContactForm";

const Contact = ({ contact, toggle, success }) => {
  return(
  <div className={`contact-wrap ${(contact)?"on":"off"}`}>
        <div className="close-panel" onClick={toggle("contact")}>
      <div className="close-panel-button" >{"<"} </div></div>

    <div className="contact-form">
    <ContactForm toggle={toggle} success={success}/></div>
    <div className="social-icon" >
      <div onClick={toggle("social")}>
    <Social />
    <div className="contact-intro">
      <h2>Hey Let's Connect</h2>
      <p>Want to collaborate or talk? </p>
      <p>Use this form to send Elijah a message</p>
      </div></div>
    </div>

  </div>
  )
};

export default Contact;
