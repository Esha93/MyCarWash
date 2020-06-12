import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import { FaArrowCircleRight } from 'react-icons/fa';

const home = (props) => {
    return(
        <div className={classes.Cards}>
            <Card className={classes.Card}>
                <Card.Body>
                    <Card.Text style={{fontSize: '22px'}}>
                        Order Management
                    </Card.Text>
                    <Link to='/order-management'>
                        <Button variant="info"><FaArrowCircleRight /></Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className={classes.Card}>
                <Card.Body>
                    <Card.Text style={{fontSize: '22px'}}>
                        User Management
                    </Card.Text>
                    <Link to='/user-management/washerslist'>
                        <Button variant="info"><FaArrowCircleRight /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
    
}

export default home;