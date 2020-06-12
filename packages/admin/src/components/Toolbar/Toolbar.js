import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Toolbar.module.css';
import { NavLink } from 'react-router-dom';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Logo />
            <NavLink to='/logout'>Logout</NavLink>
        </header>
    )
}

export default toolbar;