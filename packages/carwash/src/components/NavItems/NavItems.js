import React from 'react';
import classes from './NavItems.module.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const navItem = (props) => {
    console.log(props.isAuthenticated)
    return (
 
        <ul className={classes.NavItems}>
            <li >
                <NavLink to='/cart' activeClassName={classes.active} >
                    <FaShoppingCart />  Cart</NavLink>
            </li>
            <li >
                <NavLink to='/packages' activeClassName={classes.active}>Packages</NavLink>
            </li>
            <li >
                {
                    !props.isAuthenticated ? 
                        <NavLink to='/login' activeClassName={classes.active}>Login</NavLink> :
                        <NavLink to='/logout' activeClassName={classes.active}>Logout</NavLink>
                }
                
            </li>
        </ul>   
 
)};

export default navItem;