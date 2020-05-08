import React from 'react';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const Footer = () => {
    return (
    <footer className="footer">
        <p>Copyright <Link to="/about">Elijah Atkins</Link> {year}</p>
    </footer>
    )
}

export default Footer;