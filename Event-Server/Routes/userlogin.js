const express = require("express")
const usermodel = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const router = express.Router()
dotenv.config()
const secret = process.env.SECRET_KEY
router.post("/userlogin", async (req, res) => {
    try {
        const { contact, password } = req.body
        const data = await usermodel.findOne({ contact: contact })
        if (data == null) {
            res.status(404).json({
                status: "failure",
                message: "user not exists"
            })
        } else {
            const hash = data.password
            bcrypt.compare(password, hash).then(async function (result) {
                if (result == true) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (10 * 60),
                        data: 'foobar'
                    }, secret);
                    res.status(201).json({
                        token: token,
                        message: "User successfully loggedin"
                    })
                } else {
                    res.status(401).json({
                        message: "Invalid credentails"
                    })
                }
            });
        }
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

module.exports = router