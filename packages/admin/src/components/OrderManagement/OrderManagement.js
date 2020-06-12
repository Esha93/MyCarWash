import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import classes from './OrderManagement.module.css';
import Button from 'react-bootstrap/Button';

const OrderManagement = (props) => {
    let [orderData, setOrderData] = useState([]);
    let fetchedOrders;
    useEffect(() => {
        axios.get('http://localhost:8000/order/getorders')
            .then(res => {
                console.log(res);
                setOrderData(orderData = [...res.data.result]);
            })
            .catch(err => console.log(err))
    }, []);

    let [washerData, setWasherData] = useState([]);
    let fetchedWashers;
    useEffect(() => {
        axios.get('http://localhost:8000/washers/getwashers')
            .then(res=> {
                console.log(res);
                setWasherData(washerData = [...res.data.washersList])
            })
    }, []);

    if(washerData.length > 0) {
        fetchedWashers = (
            <Form.Control as="select" size="sm" custom>            
                {washerData.map((item) => {
                    return <option value={item.washerName} key={item._id}>{item.washerName}</option>
                })}
           </Form.Control>
        )
    } else {
        fetchedWashers = (
            <Form.Control as="select" size="sm" custom>
                <p>Loading...</p>
            </Form.Control>
        )
    }
    if(orderData.length > 0) {
        fetchedOrders = (
            <tbody>
                {orderData.map((item, index) => {
                    return(
                    <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.carDetails.carType}</td>
                        <td>{item.email}</td>
                        <td>{item.contactNo}</td>
                        <td>{item.status}</td>
                        <td>
                            {fetchedWashers}
                        </td>
                        <td><Button variant="info">Confirm</Button></td>
                    </tr>)
                })}
            </tbody>
        )
    } else {
        fetchedOrders = (
            <tbody>
                <tr><td>No data to display</td></tr>
            </tbody>
        )
    }
    return(
        <div className={classes.Content}>
            <Table bordered hover striped className={classes.Table}>
                <thead>
                    <tr style={{textAlign: 'center'}}>
                    <th>#</th>
                    <th>Car</th>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Status</th>
                    <th>Washer</th>
                    <th>Confirm </th>
                    </tr>
                </thead>
            
                    {fetchedOrders}
                
            </Table>
        </div>
    ) 
}

export default OrderManagement;