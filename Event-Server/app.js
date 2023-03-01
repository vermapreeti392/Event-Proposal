const express = require('express');
const app = express();
const getConnection = require('./connection/conn');
getConnection();
const signup = require("./Routes/signup")
const login = require("./Routes/loginVendor")
const test = require("./Routes/test")

const port = process.env.port || 5000;

app.use(express.json());
app.use(signup)
app.use(login)
app.use(test)


app.listen(port, ()=>{console.log("server is up")})