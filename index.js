var express = require("express");
const cookieParser = require('cookie-parser');

var app = express();
var port = 4000

app.use(express.json());
app.use(cookieParser());
require('./Connection/conn');



const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');



app.use('/auth',AuthRoutes);
app.use('/video',VideoRoutes);



app.listen(port,()=>{console.log("Our backend project is running on Port 4000")});