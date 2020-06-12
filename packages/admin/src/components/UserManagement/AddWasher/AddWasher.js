import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import classes from './AddWasher.module.css';

const AddWasher = (props) => {
    let [washer, setWasher] = useState({
        name: '',
        email: '',
        status: 'active'
    });
    const submitHandler = (event) => {
        // setWasher(...washer, n)
        event.preventDefault();
        axios.post('http://localhost:8000/washers/addwasher', washer)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const nameChangeHandler = (event) => {
        setWasher({...washer, name: event.target.value});
    }
    const emailChangeHandler = (event) => {
        setWasher({...washer, email: event.target.value});
    }
    const statusChangeHandler = (event) => {
        setWasher({...washer, status: event.target.value});
    }
    return(
        <div className={classes.Washer}>
            <Form onSubmit={(ev) => submitHandler(ev)}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={nameChangeHandler}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={emailChangeHandler}/>
                </Form.Group>

                <Form.Group>
                <Form.Control as="select" size="sm" custom onChange={statusChangeHandler}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddWasher;