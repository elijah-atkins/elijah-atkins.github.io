import React, { useState, useEffect } from "react";
import Success from './Success';
import * as yup from "yup"; // DOCS: https://github.com/jquense/yup
import * as emailjs from "emailjs-com";

const ContactForm = ({success, toggle}) => {

  const blankForm = {
    from_name: "",
    to_name: "",
    message: "",
    text: "", 
  };
  const [message, setMessage] = useState(blankForm);
  const [errors, setErrors] = useState(blankForm);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    from_name: yup.string().required("name is a required field"),
    to_name: yup
      .string()
      .email("must be a valid email address")
      .required("email is a required field"),
    message: yup.string().required("please enter a message"),
  });

  // inline validation, validating one key/value pair
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name) // get the value out of schema at key "e.target.from_name" --> "name="
      .validate(e.target.value) // value in input
      .then((valid) => {
        // if passing validation, clear any error

        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        // if failing validation, set error in state
        console.log("error!", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };


  useEffect(() => {
    formSchema.isValid(message).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [message, formSchema]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ycx9lgh","template_ilu9njj", e.target,/* "user_c9uxDicllYWHWOLF8AXuP"*/)
      .then((result) => {
          console.log(result.text);
          setMessage(blankForm);

      }, (error) => {
        
         setErrors({...errors, text: error.text})
          console.log(error.text);
      }).then(toggle("success"));


      

  };

  const inputChange = (e) => {
    e.persist();

    const newMessage = { ...message, [e.target.name]: e.target.value };
    validateChange(e); // for each change in input, do inline validation
    setMessage(newMessage); // update state with new data
  };

  return (
    <>
    <div className="project-border">
      <div className="contact-item">


        <form
          id="contact-form"
          onSubmit={handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              onChange={inputChange}
              value={message.from_name}
              className="form-control"
            />
            {errors.from_name.length > 0 ? (
              <p className="error">{errors.from_name}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              id="to_name"
              name="to_name"
              type="email"
              onChange={inputChange}
              value={message.to_name}
              className="form-control"
              aria-describedby="emailHelp"
            />
            {errors.to_name.length > 0 ? (
              <p className="error">{errors.to_name}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={inputChange}
              value={message.message}
              className="form-control-tall"
              rows="5"
            ></textarea>
            {errors.message.length > 0 ? (
              <p className="error">{errors.message}</p>
            ) : null}
          </div>
          <div className="contact-button">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isButtonDisabled}
            >
              Submit
            </button>
          </div>
        </form>
        {success ? <Success toggle={toggle} /> : null}
        </div>
      </div>
      <div className="contact-error">
        {errors.text ? `error: ${errors.text}` : null}
      </div>
    </>
    
  );
};

export default ContactForm;
