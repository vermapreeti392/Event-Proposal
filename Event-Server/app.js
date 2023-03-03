const express = require('express');
const app = express();
const cors = require('cors');
const getConnection = require('./connection/conn');
const signup = require("./Routes/signup");
const login = require("./Routes/loginVendor") 
const proposal = require('./Routes/proposalList');
const Userlogin = require("./Routes/userlogin")
const Userregister = require("./Routes/userregister")
getConnection();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());
app.use(Userlogin)
app.use(Userregister)
app.use(signup)
app.use(login)
app.use(proposal)
app.get('/', (req,res)=>{
    res.send('hello');
})

app.listen(port, ()=>{console.log("server is up")})