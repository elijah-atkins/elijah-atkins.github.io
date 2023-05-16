import React from "react";
import Caw from "../svg-react/Caw";

const About = (props) => {
  return (
    <div className={`content-wrap ${props.about ? "on" : "off"}`}>
      <div className="close-panel" onClick={props.toggle("about")}>
        <div className="close-panel-button"> « </div>
      </div>

      <div className="content-scroll">
        <div className="about-header">
          <h2>About</h2>
        </div>
        <div className="about-intro">
          <p>
            &ensp;Elijah Atkins is a real-time animator and digital artist who
            creates stunning and immersive experiences using cutting-edge
            technology. He has experience with various animation software and
            game engines, and he loves learning new things and experimenting
            with new software and hardware. Elijah enjoys collaborating with
            other artists and designers, and he always strives to incorporate
            feedback and revisions into his work. If you are looking for a
            real-time animator who can create amazing digital experiences for
            your audience, Elijah is the perfect person for the job.
          </p>
        </div>
        <div className="about-web">
          <h2>Background and Education</h2>
          <p>
            &ensp;Elijah has always been fascinated by the magic of animation
            and how it can transform any idea into reality. He started his
            journey as a self-taught animator using Flash and Blender and then
            pursued a degree in animation from Collins College in Mesa AZ. Since
            then, he has worked with various theater groups, production
            companies, and online platforms to create digital sets, puppets,
            avatars, and effects.
          </p>
        </div>
        <div className="about-recent">
          <h2>Skills and Tools</h2>
          <div className="recent-content-wrap">
            <div className="doodle3">
              <Caw />
            </div>
            <ul>
              <li>*Unity</li>
              <li>*Unreal</li>
              <li>*Moho</li>
              <li>*Adobe Animate</li>
              <li>*Maya</li>
              <li>*Blender</li>
              <li>*JavaScript</li>
              <li>*HTML/CSS</li>
              <li>*C#</li>
              <li>*React</li>
              <li>*Python</li>
              <li>*Leap motion hand tracking</li>
              <li>*Nvidia AI assisted animation tools</li>
              <li>*ARKit real time face tracking</li>
              <li>*Metahuman </li>
            </ul>
          </div>
        </div>
        <div className="about-motion">
          <h2>Collaboration and Contact</h2>
          <p>
            <p>&ensp;Elijah is a real time animator who enjoys collaborating with
            other animators, programmers, designers, and artists. He always
            listens to what is needed from him and from the project, and he
            aligns his work with the goals and standards of the team. He also
            values feedback and revisions, and he strives to incorporate them
            into his work.</p> 
            <p>&ensp;If you are looking for a real time animator who
            can create amazing digital experiences for your audience, Elijah is
            the perfect person for you. Check out his portfolio to see some of
            his previous work, or contact him to discuss your project ideas. He
            looks forward to hearing from you!</p>
          </p>
        </div>
        <div className="about-about">
          <p>
            elijahatkins.com is a single page{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React App{" "}
            </a>{" "}
          </p>
          <p>Designed and coded by Elijah Atkins.</p>
          <p>Using the following resources:</p>

          <ul>
            <li>
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sass
              </a>{" "}
              CSS extension language
            </li>
            <li>
              <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Font Awesome
              </a>{" "}
              For Social Media Icons
            </li>

            <li>
              <a
                href="https://fonts.google.com/specimen/Open+Sans"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Fonts
              </a>{" "}
              For Open Sans font
            </li>
            <li>
              <a
                href="https://fontforge.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FontForge
              </a>{" "}
              For Custom font creation
            </li>
          </ul>
          <a
            href="https://github.com/elijah-atkins/elijah-atkins.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website source available on github
          </a>
          <p>
            Special thanks to{" "}
            <a
              href="https://lambdaschool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lambda School
            </a>{" "}
            for web development training
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
