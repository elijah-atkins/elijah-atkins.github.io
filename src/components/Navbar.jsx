import React from 'react';

const Navbar = () => {
    return (
    <div className="navbar">
        <ul className="navbar-nav">
            <li class="nav-item">
                <a href="#" className="nav-link">
                <span class="link-text">Elijah Atkins</span>
                    
                </a>
            </li>
            <li class="nav-item">
                <a href="#" className="nav-link">
                <span class="link-text">Projects</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" className="nav-link">
                <span class="link-text">Skills</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" className="nav-link">
                <span class="link-text">Contact</span>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Navbar;