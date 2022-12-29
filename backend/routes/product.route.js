const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct,
  listAll,
  singleProduct,
  productView,
} = require('../controllers/product.controller');
//Create product
router.route('/create').post(protect, createProduct);
//User gets all his product
router.route('/read').get(protect, getProduct);
//Update product
router.route('/editProduct/:id').put(protect, editProduct);
//Delete product
router.route('/deleteProduct/:id').delete(protect, deleteProduct);
//List all product
router.route('/listAll').get(listAll);
//Single product details
router.route('/single/:id').get(singleProduct);
//product views
router.route('/view/:id').get(productView);
module.exports = router;
