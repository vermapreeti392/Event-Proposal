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

    if (password.length < 8) {
      return res.status(422).json({
        status: "fail",
        message: "Password should be more than 8 characters long",
      });
    }

    let userEmail = await Vendor.findOne({ email });
    if (userEmail) {
      return res.status(408).json({
        status: "fail",
        message: "User Email already exists.",
      });
    }

    let userExist = await Vendor.findOne({ contact });
    if (userExist) {
      return res.status(409).json({
        status: "fail",
        message: "User Contact already exists.",
      });
    }
    let hashedPassword = await bcrypt.hash(password, saltRounds)
    const user = new Vendor({   
      name,
      email,
      contact,
      password:hashedPassword,
    })

    await user.save()  

    console.log(user)

    return res.status(201).json({
      message: "User Created Successfully"
    })

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
})

module.exports = router