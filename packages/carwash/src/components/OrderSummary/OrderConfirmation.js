import React from 'react';
import { Link } from 'react-router-dom';
import classes from './OrderConfirmation.module.css';

const orderConfirmation = () => {
    return (
        <div className={classes.Modal}>
            Order Submitted Successfully !!! Your washerman will contact you soon. <br />
            Enjoy the Service !!
        
            <div style={{textAlign: 'center'}}>
                <Link to="/">Go To Home</Link>
            </div>
        </div>
    )
}

export default orderConfirmation;