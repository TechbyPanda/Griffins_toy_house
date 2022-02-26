const express = require('express');
const indexController = require('../controller/index.controller');
const router = express.Router();
router.get('/',indexController.homePage);
router.get('/admin/login',(request, response) => {
    response.render("./admin/login.ejs");
});


module.exports=router;