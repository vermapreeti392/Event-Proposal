const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const proposalSchema = new mongoose.Schema({
    eventName : {
        type: String, 
        required: true
    },
    placeOfEvent: {
        type: String, 
        required: true, 
        unique: true
    },
    proposalType : {
        type: String, 
        required: true
    },
    eventType: {
        type: String, 
        required: true
    },
    eventType: {
        type: String, 
        required: true
    },
    Budget : {
        type: String, 
        required: true
    },
    from: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
   
})
const PROPOSAL = mongoose.model('PROPOSAL', proposalSchema);
module.exports = PROPOSAL;