import React from 'react';
import git from '../svg/github-brands.svg';
import insta from '../svg/instagram-brands.svg';
import twit from '../svg/twitter-brands.svg';
import linkd from '../svg/linkedin-brands.svg'

const Social = () => {
    return(
        <div className="project-card">
            <div className="social">
            <h2>Follow me on Social Media</h2>
            <ul>
                <li>
                    <img src={git} alt="github"></img>
                </li>
                <li>
                <img src={linkd} alt="linkedin"></img>
                </li>
                <li>
                <img src={twit} alt="twitter"></img>
                </li>
                <li>
                <img src={insta} alt="instagram"></img>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Social;