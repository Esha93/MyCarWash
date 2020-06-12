const mongoose = require('mongoose');

const washersSchema = mongoose.Schema({
    washerName: {type: String, required: true},
    washerEmail: {type: String, required: true},
    activeStat: {type: String, required: true}
})

module.exports = mongoose.model('washersList', washersSchema);