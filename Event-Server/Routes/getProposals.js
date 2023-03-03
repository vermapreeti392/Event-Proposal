const express = require('express');
const router = express.Router();
const Proposal = require("../models/proposal")



router.get("/getProposals", async(req,res)=>{
    
    try {
        const allProposals = await Proposal.find()

        res.status(200).json({
        allProposals
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Error",
            message:error.message
        })
    }

})