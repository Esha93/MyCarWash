const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    contactNo: {type: Number, required: true},
    userId: {type: String, required: false},
    type: {type: String, required: true},
    date: {type: String, required: true},
    status: {type: String, required: true},
    carDetails: {type: Object, required: true}
})

module.exports = mongoose.model('Order', orderSchema);