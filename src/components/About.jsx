import React from "react";

const About = (props) => {
  return (
    <div className={`about-wrap ${props.about ? "on" : "off"}`}>
      <div className="close-panel" onClick={props.toggle("about")}>
        <div className="close-panel-button"> > </div>
      </div>
      <div className="about-content">
        <div className="about-header">
          <h2>About</h2>
        </div>
        <div className="about-intro">
          <p>
            Elijah Atkins is currently studying full stack web development with
            Lambda School. He has been a production enhancement specialist at
            Microchip/Atmel from 2008 to December of 2019. He was laid off and
            started on a new career path in web development.{" "}
          </p>
        </div>
        <div className="about-web">
          <h3>Web Development</h3>
          <p>
            With knowledge of the foundations of modern web design including
            HTML5 CSS3 and JavaScript, and a working relationship with modern
            development tools like React and Bootstrap. Elijah has mastery of
            front end development. With plenty of examples in the projects page.
          </p>
        </div>
        <div className="about-recent">
          <h2>Recent practical experience in...</h2>
          <ul>
            <li>JavaScript</li>

            <li> HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="about-motion">
          <h2>Motion Graphics</h2>
          <p>
            Over a decade of experience making computer aided motion graphics.
            From modern HTML5 animations done in code and with style sheets to
            high end 3D Animation software. Experience with a wide variety of
            software from IDE like VSCode, The Adobe Creative Suite, Moho Pro,
            Blender, and much more. Elijah is always willing to learn any new
            software if it will do cool things.
          </p>
        </div>
        <div className="about-about">
          <p>
            elijahatkins.com is a single page{" "}
            <a href="https://reactjs.org/">React App </a>
            Designed and coded by Elijah Atkins.<br></br> Using the following resources:
          </p>
          <ul>
            <li>
              <a href="https://sass-lang.com/">Sass</a> CSS extension language
            </li>
            <li>
              <a href="https://fontawesome.com/">Font Awesome</a> For Social
              Media Icons
            </li>
            <li>
              <a href="https://fonts.google.com/">Google Fonts</a> For all fonts
            </li>
            <li>
              <a href="https://github.com/jquense/yup">Yup,</a> a JavaScript
              schema builder for validation
            </li>
            <li>
              <a href="https://www.npmjs.com/package/emailjs-com">EmailJS </a>{" "}
              For sending emails using client side technologies
            </li>
          </ul>
          <a href="https://github.com/elijah-atkins/elijah-atkins.github.io/tree/website">
            Website source available on github
          </a>
          <p>
            Special thanks to{" "}
            <a href="https://lambdaschool.com/">Lambda School</a> for web
            development training
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
