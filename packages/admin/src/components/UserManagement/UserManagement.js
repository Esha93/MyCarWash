import React from 'react';
import classes from './UserManagement.module.css';
import NavList from './NavList/NavList';
import WasherList from './WasherList/WasherList';
import AddWasher from './AddWasher/AddWasher';

const userManagement = (props) => {
    return (
        <div className={classes.ManageUser}>
            <NavList className={classes.Nav} />
            <div>
                {props.location.pathname === '/user-management/addwashers' ? <AddWasher /> : <WasherList />}
            </div>
        </div>
    
)
}
export default userManagement;