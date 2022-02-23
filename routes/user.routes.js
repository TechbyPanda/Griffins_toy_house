const express = require('express');

const userController = require('../controller/user.controller.js');

const router = express.Router();

router.get("/contactus",userController.contactusPage);
router.post("/contactus",userController.contactusPost);

router.get("/query",userController.queryPage);
router.post("/query",userController.queryPost);


module.exports = router;