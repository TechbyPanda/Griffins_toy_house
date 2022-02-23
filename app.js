// This is entry point 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin.routes');
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

const filepath = path.join(__dirname,"public");
app.use(express.static(filepath));

app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("server is running");
});
