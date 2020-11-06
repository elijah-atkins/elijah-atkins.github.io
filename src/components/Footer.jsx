import React from 'react';

const year = new Date().getFullYear();

const Footer = (props) => {

    return (
    <footer className="footer" onClick={props.toggle("social")}>
        <p>Copyright © {year} Elijah Atkins</p>
    </footer>
    )
}

export default Footer;