const express = require('express');
const bodyParser = require('body-parser');
const session= require('express-session');
const path = require('path');
const indexRouter = require('./route/index.route');
const categoryRouter = require('./route/category.route');
const adminRouter = require('./route/admin.route');
const productRouter = require('./route/product.route');
const userRouter = require('./route/user.route');

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(session({
    secret: 'rereprxvncvncvnrorererp'
}));

app.use(indexRouter);
 app.use("/user",userRouter);
app.use("/product",productRouter);
app.use("/category",categoryRouter);
app.use("/admin",adminRouter);
app.listen(4000,()=>{
    console.log("server running");
})