import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import classes from './ContactData.module.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import OrderConfirmation from '../../components/OrderSummary/OrderConfirmation';


class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: '',
        contactNo: '',
        date: new Date(),
        type: '',
        redirect: false,
    }
    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    addressChangeHandler = (event) => {
        this.setState({address: event.target.value})
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value})
    }

    contactChangeHandler = (event) => {
        this.setState({contactNo: event.target.value});
        
    }

    submithandler = (event) => {
        event.preventDefault();
        const contactDetails = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            contactNo: this.state.contactNo,
            scheduleDate: this.state.date,
            type: 'now',
            status: 'Scheduled',
            carDetails: this.props.location.carDetails
        }
        console.log(contactDetails);
        axios.post('http://localhost:8000/order', contactDetails)
            .then(res => {
                console.log(res);
                this.setState({redirect: true});
                
            })
            .catch(err => console.log(err));
    }

    componentWillMount() {
        if(this.props.location.search) {
            const query = this.props.location.search.split('?')
            this.setState({type: query[1]})
        }
    }


    render() {
        if(this.state.redirect) {
            return (<><Redirect to="/order-confirmed" />
            <Route path='/order-confirmed' component={OrderConfirmation} /></>)
                 
        }
        let orderSummary;
        
        if(this.props.location.carDetails) {
            orderSummary = <>
            <h6>Your Order : </h6>
            <OrderSummary carDetails={this.props.location.carDetails}/>
            <hr />
                <h6>Contact Details:</h6>
                <form onSubmit={this.submithandler}>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Schedule Date </Form.Label><br />
                        <DatePicker selected={this.state.date} disabled={this.state.type === 'now'}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required name="name"
                            onChange={this.nameChangeHandler} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter Address" required name="address"
                            onChange={this.addressChangeHandler} value={this.state.address}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email id" required name="email"
                                onChange={this.emailChangeHandler} value={this.state.email}/>
                        </Form.Group>
                    
                        <Form.Group as={Col} controlId="formBasicContact">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="number" placeholder="Enter Contact no." required name="contactNo"
                                onChange={this.contactChangeHandler} value={this.state.contactNo}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </form>
            </>
        } else {

            orderSummary = <>
                <h5>Cart is empty !!!</h5>
                <Button onClick={() => this.props.history.push('/packages')}>
                    Click here to book a wash</Button>
                </>
            
        }
        return (
            <div className={classes.Form}>
                
                {orderSummary}
                
            </div>
        )
    }
}



export default ContactData;