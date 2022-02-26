const express = require('express');
const Cart = require('../model/cart.model');
const cartController = require('../controller/cart.controller');
const userAuth = require('../middleware/userAuth');
const router = express.Router();

router.get("/add-to-cart/:pid",userAuth.isAuth,cartController.addToCart);
router.get("/remove-from-cart/:pid",userAuth.isAuth,cartController.removeFromCart);
// /cart/view-cart

module.exports = router;