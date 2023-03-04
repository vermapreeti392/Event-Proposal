const Vendor = require("../models/vendor")
const People = require('../models/users')
const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_KEY
module.exports = async (req,res,next)=>{
    console.log(req.headers.authenticate + " from middle ware")
    try {
       const {authenticate = ""} = req.headers
       if(!authenticate){
           return res.status(401).send('token is not recieved')
       }

       const decoded = jwt.verify(authenticate,secret)

       console.log(decoded.user.contact)
       const data = await Vendor.findOne({contact:decoded.user.contact})
       if(!data){
          const User = await People.findOne({contact:decoded.user.contact})
          if(!User)
          return res.status(401).send("User not Found")
       }
       req.user = data
       next()

   } catch (error) {
       console.log("error in fetching user -->" + error.message)
       res.status(401).json({
           status:"Token Expired"
       })
   }
}

// const Vendor = require("../models/vendor")
// const jwt = require("jsonwebtoken")
// const secret = process.env.SECRET_KEY
// module.exports = async (req,res,next)=>{
//     try {
//        const {authenticate = ""} = req.headers
//        if(!authenticate){
//            return res.status(401).send('token is not recieved')
//        }

//        const decoded = jwt.verify(authenticate,secret)

//        //console.log(decoded.user.contact)
//        const data = await Vendor.findOne({contact:decoded.user.contact})
//        if(!data){
//          return res.status(401).send("User not Found")
//        }
//        req.user = data
//        next()

//    } catch (error) {
//        console.log("error in fetching user -->" + error.message)
//        res.status(401).json({
//            status:"Token Expired"
//        })
//    }
// }
