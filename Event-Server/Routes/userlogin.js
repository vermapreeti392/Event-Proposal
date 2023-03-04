const express = require("express")
const User = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const router = express.Router()
dotenv.config()
const secret = process.env.SECRET_KEY
router.post("/userlogin", async (req, res) => {
  const { contact, password } = req.body;
  //   console.log(req.body)
  try {
    if (!contact || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide a Contact and a password.",
      });
    }
    const user = await User.findOne({ contact });
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

// const express = require("express")
// const usermodel = require("../models/users")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const dotenv = require("dotenv")
// const router = express.Router()
// dotenv.config()
// const secret = process.env.SECRET_KEY;

// router.post("/userlogin", async (req, res) => {
//     try {
//         const { contact, password } = req.body
//         const data = await usermodel.findOne({ contact: contact })
//         if (data == null) {
//             res.status(404).json({
//                 status: "failure",
//                 message: "user not exists"
//             })
//         } else {
//             const hash = data.password
//             bcrypt.compare(password, hash).then(async function (result) {
//                 if (result == true) {
//                     const token = jwt.sign({
//                         exp: Math.floor(Date.now() / 1000) + (1000 * 60),
//                         data: 'foobar'
//                     }, secret);
//                     res.status(201).json({
//                         token: token,
//                         message: "User login Successfully"
//                     })
//                 } else {
//                     res.status(401).json({
//                         message: "Invalid credentials"
//                     })
//                 }
//             });
//         }
//     } catch (e) {
//         res.status(400).json({
//             status: "failed",
//             message: e.message
//         })
//     }
// })

// module.exports = router