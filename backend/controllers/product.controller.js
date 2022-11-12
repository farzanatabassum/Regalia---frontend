const Product=require('../models/product.model')
const asyncHandler=require('express-async-handler')
const cloudinary = require("../config/cloudinary");


//api/products/create
//post req
//private
const createProduct=asyncHandler(async(req,res)=>{
  const file=req.files.image
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "productImages",
  });
  console.log(result)
    const {category,brand,fabric,size,condition,gender,originPrice, sellingPrice,tags}=req.body

    //Any Input field is empty
    if(!file||!category||!brand||!fabric||!size||!condition||!gender||!originPrice||!sellingPrice||!tags){
        res.status(400)
        throw new Error("Please add all fields")
    }
    const product=await Product.create({
        image:result.url,
        category,
        brand,
        fabric,
        size,
        condition,
        gender,
        originPrice, 
        sellingPrice,
        tags,
        user:req.user.id,
    })
    res.status(200).json(product)
})

//api/products/read
//get req
//private
const getProduct=asyncHandler(async(req,res)=>{
    const products = await Product.find({ user: req.user.id })

    res.status(200).json(products)

})
//api/products/deleteProduct
//delete req
//private
module.exports={createProduct,getProduct,}