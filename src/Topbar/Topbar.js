import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header>
            <nav className={classes.topbar}>
                <img src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt='Amazon Logo' />
            </nav>
        </header>
    );
}

export default Topbar;