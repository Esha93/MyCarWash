import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import classes from './Signup.module.css';

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    confirmPasswordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    signupHandler = (event) => {
        event.preventDefault();
        if(this.state.password === this.state.confirmPassword) {
            const signup = {email: this.state.email, password: this.state.password};
            axios.post('http://localhost:8000/login/adduser', signup)
                .then(res => console.log(res)).catch(err => console.log(err));  
        } else {
            alert('Password and Confirm Password should be same');
        }
        
    }


    render () {
        return (
            <div >
                <form className={classes.Modal} onSubmit={this.signupHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                            onChange={this.emailChangeHandler}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required
                            onChange={this.passwordChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required
                            onChange={this.confirmPasswordChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                    <Button variant="info" type="submit">
                        SIGN UP
                    </Button>
                    </Form.Group>
                </form>
            </div>
        )
    }
}

export default Signup;