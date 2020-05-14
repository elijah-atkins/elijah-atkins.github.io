import React from "react";
import Social from "./Social";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="main">
      <div className="contact">
        <Social />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
