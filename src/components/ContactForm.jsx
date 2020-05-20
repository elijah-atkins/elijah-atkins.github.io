import React, { useState, useEffect } from "react";
import * as yup from "yup"; // DOCS: https://github.com/jquense/yup
import * as emailjs from "emailjs-com";

const ContactForm = () => {
  const blankForm = {
    name: "",
    email: "",
    message: "",
  };
  const [message, setMessage] = useState(blankForm);
  const [errors, setErrors] = useState(blankForm);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string().required("name is a required field"),
    email: yup
      .string()
      .email("must be a valid email address")
      .required("email is a required field"),
    message: yup.string().required("please enter a message"),
  });

  // inline validation, validating one key/value pair
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name) // get the value out of schema at key "e.target.name" --> "name="
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

    let templateParams = {
      from_name: message.email,
      to_name: "elijahorama@gmail.com",
      subject: message.name,
      message_html: message.message,
    };

    emailjs
      .send(
        "gmail",
        "template_jD14FVvB",
        templateParams,
        "user_9uGgyjy7pkRZkqKCGG2wK"
      )
      .then(
        (result) => {
          console.log('Success!',result.text);
        },
        (error) => {
          console.log('Failed...',error.text);
        }
      );

    setMessage(blankForm);
  };

  const inputChange = (e) => {
    e.persist();
    const newMessage = { ...message, [e.target.name]: e.target.value };
    validateChange(e); // for each change in input, do inline validation
    setMessage(newMessage); // update state with new data
  };

  return (
    <div className="project-border">
      <div className="social">
        <h1>Contact Elijah</h1>

        <form
          id="contact-form"
          onSubmit={handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={inputChange}
              value={message.name}
              className="form-control"
            />
            {errors.name.length > 0 ? (
              <p className="error">{errors.name}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={inputChange}
              value={message.email}
              className="form-control"
              aria-describedby="emailHelp"
            />
            {errors.email.length > 0 ? (
              <p className="error">{errors.email}</p>
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
      </div>
    </div>
  );
};

export default ContactForm;
