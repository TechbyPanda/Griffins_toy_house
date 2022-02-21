const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

const filepath = path.join(__dirname,"public");
app.use(express.static(filepath));

app.listen(3000,()=>{
    console.log("server is running");
});