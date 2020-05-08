import React from "react";

const Skills = () => {
  return (
    <div className="main">
      <div className="skills">
      <div className="header"><h1>Skills</h1></div>
        <div className="skills-grid">
          <div className="skill-container ea-bio">
            <div className="skill-content">
              <h2>Elijah Atkins</h2>
              <p>Short Bio about Elijah Atkins. Hands on, Quick learner, Experimental</p>
            </div>
          </div>
          <div className="skill-container web-dev">
            <div className="skill-content">
              <h2>Web Development</h2>
              <p>
              With knowledge of the foundations of modern web desigin including HTML5 CSS3 and JavaScript,
              and a working relationship with modern development tools like React and Bootstrap.
              Elijah has mastery of front end development.</p>
            </div>
          </div>
          <div className="skill-container code">
            <div className="skill-content">

              <h2>Recent practical experience in...</h2>
              <ul>
              <li>JavaScript</li>

                <li>  HTML</li>
              <li>
                 CSS
              </li>
               <li>
                  React
               </li>
               <li>
                 Python 
                </li>
              </ul>

            </div>
          </div>
          <div className="skill-container design">
            <div className="skill-content">
              <h2>Design</h2>
              <p>
              Elijah was commisioned to design a wide varity of items
              from t-shirts to soap molds and custom 3d printed objects.

              </p>
            </div>
          </div>

          <div className="skill-container mo-graph">
            <div className="skill-content">
              <h2>Motion Graphics</h2>
              <p>
                Over a decade of experience making computer aided motion graphics. From modern 
                HTML5 animations done in code and with style sheets to high end 3D Animation software.
                Experience with a wide varity of software from IDE like VSCode, The Adobe Creative Suite, 
                Moho Pro, Blender, and much more. Elijah is always willing to learn any new software if it 
                will do cool things.
              </p>
            </div>
          </div>

          <div className="skill-container ani">
            <div className="skill-content">
              <h2>Animation</h2>
              <p>
                Trained in computer animation at collins College in Mesa AZ. Familure with high end 
                and consumer 3D modeling and animation software.
                With experience in hand drawn and computer animation in team and solo environments.
              </p>
            </div>
          </div>


          <div className="skill-container paint">
            <div className="skill-content">
              <h2>Painting</h2>
              <p>
               Acrylic and Oils work has been seen in galleries
              </p>
            </div>
          </div>

          <div className="skill-container puppet">
            <div className="skill-content">
              <h2>Puppetry</h2>
              <p>
                Can build, design and perform puppets for stage and video. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
