import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <nav className={classes.footerbar}>       
                {<p> Made By <span> <i className="fa fa-heart" aria-hidden="true"></i></span> Neet Patel</p>}
            </nav>
        </footer>
    );
}

export default Footer;