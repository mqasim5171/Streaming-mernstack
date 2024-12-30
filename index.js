var express = require("express");
var app = express();
var port = 4000

app.use(express.json());
require('./Connection/conn');



const AuthRoutes = require('./Routes/user');


app.use('/auth',AuthRoutes);



app.listen(port,()=>{console.log("Our backend project is running on Port 4000")});