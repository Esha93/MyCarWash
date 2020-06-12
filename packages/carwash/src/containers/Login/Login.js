import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import GoogleLogin from 'react-google-login';
import classes from './Login.module.css';
import Nav from 'react-bootstrap/Nav';
import * as actions from '../../store/actions/actions';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        user: true
    }
    
    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    loginHandler = (event) => {
        event.preventDefault();
        this.props.loginAuth(this.state.email, this.state.password);
    }


    signupHandler = (event) => {
        this.props.history.push('/signup');
    }

    responseFacebook = (response) => {
        console.log(response);
    }
  
    successResponseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        localStorage.setItem('userId', response.profileObj.googleId);
        localStorage.setItem('token', response.accessToken);
        this.props.onGoogleLogin(response.profileObj.googleId);
    }

    errorResponseGoogle = (response) => {
        alert(response);
    }

    selectHandler = (eventKey, activeKey) => {
        eventKey === 'user' ? this.setState({user: true}) : this.setState({user: false})
    }

    render () {
        if(this.props.isAuth) {
            if(this.state.user) {
                return <Redirect to="/home" />
            } else {
                window.open('http://localhost:3001', 'Car Wash Admin Panel');
            }
                    
        }
        let dispGoogleLogin = null;
        if(this.state.user) {
            dispGoogleLogin = <div>
                <GoogleLogin className={classes.socialLogin} 
                    clientId="206827218168-8m9l1vjrj55b1ne2qc2r1anls3v8sj6o.apps.googleusercontent.com" 
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.successResponseGoogle}
                    onFailure={this.errorResponseGoogle}
                    cookiePolicy={'single_host_origin'}   
                />
        
                <div>Not having account ?   
                    <Button size="sm" variant="secondary" type="button" style={{marginLeft: '15px'}}
                        onClick={this.signupHandler} >SIGN UP</Button>
                </div>
                </div>
        } 

        return (
            <div className={classes.Background}>
            <div className={classes.Modal}>
                <Nav variant="tabs" onSelect={this.selectHandler} defaultActiveKey="user"
                    style={{marginBottom: '20px'}}>
                    <Nav.Item>
                        <Nav.Link eventKey="user">User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="admin">Admin</Nav.Link>
                    </Nav.Item>
                </Nav>
                <form onSubmit={this.loginHandler}>
                    
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
                    <Form.Group>
                    <Button variant="info" type="submit">
                        LOGIN
                    </Button>
                    </Form.Group>
                </form>
                {dispGoogleLogin}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        usrId: state.userId,
        isAuth: state.isAuthenticated
    }
}

const mapDispacthToProps = dispatch => {
    return {
        loginAuth: (email, password) => { dispatch( actions.login(email, password))},
        onGoogleLogin: (userId) => {dispatch(actions.googleLogin(userId))}
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Login);
