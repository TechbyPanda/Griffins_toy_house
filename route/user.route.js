const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();
router.post('/register',userController.registerPage);
router.get('/login',userController.loginPage);
router.get('/create-account',(request, response)=>{

    response.render("./user/create_account.ejs");
});
router.post('/login',userController.loginPost);
router.get('/logout',userController.logout);
router.get('/forgot-password',userController.forgotPassword);
module.exports=router;