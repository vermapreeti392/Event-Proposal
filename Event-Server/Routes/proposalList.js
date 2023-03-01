const express = require('express');
const requirelogin = require('../middlewares/requirelogin');
const router = express.Router();
const proposalSchema = require('../models/proposal');

// posting data
router.post('/createProposal', requirelogin, async(req,res)=>{
try{
    const {eventName,place,proposalType,eventType,budget,date_from,date_to,description,
        images,food,events} = req.body;
    // console.log(eventName,place,proposalType,eventType,budget,date_from,date_to,description,
    //     images,food,events);
    if(!eventName){
        return res.status(404).json({
            status: "failed",
            error: "enter all fields"
        })
    }
    else{  
          req.vendor    
        const proposal = await proposalSchema.create({
            eventName,place,proposalType,eventType,budget,date_from,date_to,description,
            images,food,events,
            postedBy:req.user});  

       return res.status(200).json({
            status: "success",
            proposal
        })
    }
}
 catch(e){
    return res.status(422).json({
        status:'failure',
        message : e.message
    })
 }   
})

// fetch data
router.get('/allProposal', requirelogin, async(req,res)=>{
    
    try{
        const data = await proposalSchema.find({postedBy:req.user._id});
           console.log(data); 
    return res.status(200).json({
        status: "success",
        data
    })
    }
    catch(e){
        res.status(422).json({
           status: "failure",
           error: e.error,
       })
   }
    
})


module.exports = router;