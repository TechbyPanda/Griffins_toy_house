const express = require('express');

const adminController = require('../controller/admin.controller');
const router = express.Router();

router.get("/login",adminController.adminLoginPage);

// router.post("/login",adminController.adminLoginPost);

module.exports = router;