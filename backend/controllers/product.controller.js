const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler');

//api/products/create
//post req
//private
const createProduct = asyncHandler(async (req, res) => {
  const {
    image,
    category,
    brand,
    fabric,
    size,
    condition,
    gender,
    originPrice,
    sellingPrice,
    tags,
  } = req.body;

  //Any Input field is empty
  if (
    !image ||
    !category ||
    !brand ||
    !fabric ||
    !size ||
    !condition ||
    !gender ||
    !originPrice ||
    !sellingPrice ||
    !tags
  ) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  const product = await Product.create({
    image,
    category,
    brand,
    fabric,
    size,
    condition,
    gender,
    originPrice,
    sellingPrice,
    tags,
    seller: req.user.id,
  });
  res.status(200).json(product);
});

//api/products/read
//get req
//private
//User gets all product
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({ seller: req.user.id });

  res.status(200).json(products);
});
//api/products/editProduct/:id
//put req
//private
//User can update product
const editProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Make sure the logged in user matches the product user
  if (product.seller.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  //update product
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
});

//api/products/deleteProduct/:id
//delete req
//private
//User can delete product
const deleteProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }
  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Make sure the logged in user matches the product user
  if (product.seller.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  //Deleting prod  res.status(200).json({ id: req.params.id })

  await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({ id: req.params.id });
});

//api/products/listAll
//get req
//public
//Get all products of all user
const listAll = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .sort({ _id: -1, brand: 1, category: 1, size: 1 })
    .limit(8);
  res.status(200).json(products);
});

//api/products/single/:id
//get req
//public
//Get Single product details
const singleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
 
  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }
  res.status(200).json(product);
});

//api/products/view/:id
//get req
//public
//Calculate total product views
const productView = asyncHandler(async(req, res) => {
const product=await Product.findById(req.params.id)
if(product){
  product.totalViews=parseInt(req.body.totalViews)+1;
  const updatedViews=await product.save();
  console.log(updatedViews)
  res.json({
    _id:updatedViews._id,
    totalViews:updatedViews.totalViews,
  })
}  
else {
  res.status(404);
  throw new Error('Product Not Found');
}
    
});

module.exports = {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct,
  listAll,
  singleProduct,
  productView,
};
