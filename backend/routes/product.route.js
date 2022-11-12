const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {createProduct,getProduct}=require('../controllers/product.controller')
router.route('/create').post(protect,createProduct)
router.route('/read').get(protect,getProduct)
module.exports = router;
