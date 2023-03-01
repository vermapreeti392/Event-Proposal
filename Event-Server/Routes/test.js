const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const Vendor = require('../models/vendor')
const authentication = require("../middlewares/requirelogin")


router.post("/test",authentication,(req,res)=>{
    console.log("comes here")
    res.status(200).json({
        message:"succesfull",
        data: req.user
    })
    
})

module.exports = router