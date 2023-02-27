const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const vendorSchema = new mongoose.Schema({
    name : {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    contact : {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
})
const VENDOR = mongoose.model('VENDORS', vendorSchema);
module.exports = VENDOR;