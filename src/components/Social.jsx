import React from 'react';
import git from '../svg/github-brands.svg';
import insta from '../svg/instagram-brands.svg';
import twit from '../svg/twitter-brands.svg';
import linkd from '../svg/linkedin-brands.svg'

const Social = () => {
    return(
        <div className="project-card">
            <div className="social">
            <h1>Follow me on Social Media</h1>
            <ul>
                <li>
                    <a href="https://github.com/elijah-atkins/"><img src={git} alt="github"></img></a>
                </li>
                <li>
                 <a href="https://www.linkedin.com/in/elijah-atkins-8436741a6/"><img src={linkd} alt="linkedin"></img></a>
                </li>
                <li>
                <a href="https://twitter.com/elijahatkins"><img src={twit} alt="twitter"></img></a>
                </li>
                <li>
                <a href="https://www.instagram.com/elijahatkins/"><img src={insta} alt="instagram"></img></a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Social;