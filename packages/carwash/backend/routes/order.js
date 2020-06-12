const express = require('express');
const Order = require('../models/order');

const router = express.Router();

router.post('', (req, res, next) => {
    // console.log(req.body);
    const order = new Order({
        name: req.body.name,
        email: req.body.email,
        contactNo: req.body.contactNo,
        address: req.body.address,
        date: req.body.scheduleDate,
        type: req.body.type,
        status: req.body.status,
        carDetails: req.body.carDetails
    })
    order.save().then(result => {
        res.status(201).json({
            messages: 'Order Submitted Successfully',
            order: {...result, id: result._id}
        })
    })
})

router.get('/getorders', (req, res, next) => {
    const orders = Order.find().sort({status: -1});
    orders.then(result => {
    
        res.status(200).json({
            messages: 'fetched successfully',
            result: result
        })
    })
})

module.exports = router;