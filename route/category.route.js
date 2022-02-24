const express = require('express');
const categoryController = require('../controller/category.controller');
const router=express.Router();
router.post('/add-category',categoryController.addCategory);
router.get('/category-list',categoryController.getCategoryList);
router.get('/update',categoryController.updateCategory);

module.exports =router;