const express=require("express");
const bodyParser=require("body-parser");
var app=express();
const mysql=require("mysql");
const customerroutes=require("./routes/customer");
app.use(bodyParser.json());
const mysqlConnection = require("./connection");
app.use("/customer", customerroutes);



