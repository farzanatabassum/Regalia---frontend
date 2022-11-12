const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {createProduct,getProduct,editProduct,deleteProduct}=require('../controllers/product.controller')
router.route('/create').post(protect,createProduct)
router.route('/read').get(protect,getProduct)
router.route('/editProduct').put(protect,editProduct)
router.route('/deleteProduct').delete(protect,deleteProduct)
module.exports = router;
