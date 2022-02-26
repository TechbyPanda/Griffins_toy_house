const express = require('express');
const multer = require('multer');
const upload = multer({dest:'public/images'});
const auth = require('../middleware/auth');

const categoryController = require('../controller/category.controller');
const router=express.Router();
router.post('/add-category',auth.isAuth,upload.single('category_image'),categoryController.addCategory);
router.get('/category-list',categoryController.getCategoryList);
router.get('/update',categoryController.updateCategory);

module.exports =router;