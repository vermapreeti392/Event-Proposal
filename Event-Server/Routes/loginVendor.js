const express = require("express")
const Vendor = require("../models/vendor")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const router = express.Router()
dotenv.config()
const secret = process.env.SECRET_KEY
router.post("/login/vendor", async (req, res) => {
  const { contact, password } = req.body;
  //   console.log(req.body)
  try {
    if (!contact || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide a Contact and a password.",
      });
    }
    const user = await Vendor.findOne({ contact });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "User does not exists",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid Credentials",
      });
    }
    const payload = {
      user: {
        name: user.name,
        contact: user.contact,
        email: user.email
      },
    };
    
    const token = jwt.sign(payload, secret, {
      expiresIn: '100000m',
    });
    res.status(200).json({
      status: "Successfully Login",
      data: { token, user },
    });
  } catch (err) {
    res.status(409).json({
      status: "fail",
      message: err.message,
    });
  }
})

module.exports = router