import React from 'react'

const About = () => {
    return(
        <div className="about-card"> 
            <div className="about-content">
                <h2>Designed and coded by Elijah Atkins</h2>
                <p>elijahatkins.com is a single page <a href="https://reactjs.org/">React App</a> Made using the following resources</p>
                <ul>
                    <li><a href="https://sass-lang.com/">Sass</a> CSS extension language</li>
                    <li><a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">react-router-dom</a> DOM bindings for <a href="https://reacttraining.com/react-router/">React Router</a></li>
                    <li><a href="https://github.com/jquense/yup">Yup,</a> a JavaScript schema builder for validation</li>
                    <li><a href="https://www.npmjs.com/package/emailjs-com">EmailJS </a> For sending emails using client side technologies only</li>
                    <li><a href="https://fontawesome.com/">Font Awesome</a> For Social Media Icons</li>
                    <li><a href="https://fonts.google.com/">Google Fonts</a> For all fonts</li>

                </ul>
                <a href="https://github.com/elijah-atkins/elijah-atkins.github.io/tree/website">Website source available on github</a>
                <p>Special thanks to <a href="https://lambdaschool.com/">Lambda School</a> for web development training</p>
            </div>

        </div>
    )
}

export default About;