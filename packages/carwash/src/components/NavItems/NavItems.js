import React from 'react';
import classes from './NavItems.module.css';
import { NavLink } from 'react-router-dom';
// import {Button} from 'carwash-apps-shared'

const navItem = (props) => (
    <>
    {/* <Button /> */}
        <ul className={classes.NavItems}>
            <li >
                <NavLink to='/packages' activeClassName={classes.active}>Packages</NavLink>
                </li>
            <li >
                <NavLink to='/login' activeClassName={classes.active}>Login</NavLink>
            </li>
        </ul>   
    </>
);

export default navItem;