const express = require('express');

const router = express.Router();
router.get('/',(request, response) => {
    response.render("./index.ejs");
});
router.get('/admin/login',(request, response) => {
    response.render("./admin/login.ejs");
});
 router.get('/create-account',(request, response)=>{

     response.render("./user/create_account.ejs");
 });


module.exports=router;