const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const Vendor = require('../models/vendor')
const saltRounds = 12

router.post("/signup/vendor", async(req,res)=>{
    const { name, email, contact, password } = req.body;
    console.log(req.body)

  try {
    if (!email || !password || !name || !contact) {
      return res.status(422).json({
        status: "fail",
        message: "Please provide all fields",   
      });
    }

    if (password.length < 6) {
      return res.status(422).json({
        status: "fail",
        message: "Password should be more than 6 characters long",
      });
    }

    let userEmail = await Vendor.findOne({ email });
    if (userEmail) {
      return res.status(408).json({
        status: "fail",
        message: "Vendor Email already exists.",
      });
    }

    let vendorExist = await Vendor.findOne({ contact });
    if (vendorExist) {
      return res.status(409).json({
        status: "fail",
        message: "Vendor Contact already exists.",        
      });
    }
    let hashedPassword = await bcrypt.hash(password, saltRounds)
    const vendor = new Vendor({   
      name,
      email,
      contact,
      password:hashedPassword,
    })

    await vendor.save()  

    // console.log(vendor)

    return res.status(201).json({
      message: "Vendor Created Successfully",
      vendor
    })

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
})

module.exports = router