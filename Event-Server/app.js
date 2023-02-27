const express = require('express');
const app = express();
const getConnection = require('./connection/conn');
getConnection();
const port = process.env.port || 5000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('hello');
})

app.listen(port, ()=>{console.log("server is up")})