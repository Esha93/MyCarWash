import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import classes from './NavList.module.css';

const navList = () => {
    return (
        <Nav variant='pills' style={{top: '70px'}} className={classes.Nav}>
            <Link to='/user-management/washerslist' className={classes.Navitem}>
                Washers
            </Link>
            <Link to='/user-management/addwashers' className={classes.Navitem}>
                Add Washers
            </Link>
        </Nav>
    )
}

export default withRouter(navList);