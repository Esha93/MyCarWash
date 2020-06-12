const express = require('express');
const Washers = require('../models/washers');

const router = express.Router();

router.get('/getwashers', (req, res, next) => {
    const washers = Washers.find();
    washers.then(result => {
        res.status(200).json({
            messages: 'Washers Fetched successfully',
            washersList: result
        })
    })
})

router.post('/addwasher', (req, res, next) => {
    const washer = new Washers({
        washerName: req.body.name,
        washerEmail: req.body.email,
        activeStat: req.body.status
    })
    washer.save().then(response => {
        res.status(201).json({
            messages: 'Washer added successfully',
            result: response
        })
    })
})

module.exports = router;