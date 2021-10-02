const productController = require('../controllers/ProductController');
const express = require('express');
const router = express.Router();

// * [GET]
router.get('/product', productController.getProduct);

// * [POST]

module.exports = router;