const express = require("express")
const router = express.Router()
const usermodel = require("../models/users")
const bcrypt = require('bcrypt')
const saltRounds = 10

router.post("/userregister" , async (req ,res)=>{
    try{
        const {name,password,contact,email} = req.body;        
        let data = await usermodel.findOne({email:email})
        let contacted = await usermodel.findOne({contact:contact})
        if(data !== null){
            res.status(404).json({
                status : "failure",
                message : "user already exists"
            })
        }
        else if(contacted !== null){
             res.status(409).json({
                status: "fail",
                message: "User Contact already exists.",        
              });
        }
        else{
            bcrypt.hash(password, saltRounds,async function (err, hash) {
                if(err){
                   res.status(400).json({
                       msg : err
                   })
                }else{
                    let insert = await usermodel.create({
                        name : name,
                        email: email,
                        password : hash,
                        contact : contact
                    })
                    res.status(201).json({
                        status : "success",
                        message : "user created successfully",
                        data : insert
                    })
                }
           });
            
        }
    }catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

module.exports = router