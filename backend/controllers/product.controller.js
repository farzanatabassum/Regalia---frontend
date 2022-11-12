const Product=require('../models/product.model')
const asyncHandler=require('express-async-handler')
const cloudinary = require("../config/cloudinary");


//api/products/create
//post req
//private
const createProduct=asyncHandler(async(req,res)=>{
  const file=req.files.image
  const result = await cloudinary.uploader.upload(file.tempFilePath)
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
//api/products/editProduct?id=id&url=imageUrl
//put req
//private
const editProduct=asyncHandler(async(req,res)=>{
  let product = await Product.findById(req.query.id);

  if (!product) {
    res.status(400)
    throw new Error('Product not found')
  }

   // Check for user
   if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  //Getting image name from image url
  const imageUrl=req.query.url
  const imageUrlArray=imageUrl.split('/')
  const imageSplit=imageUrlArray[imageUrlArray.length-1]
  const imageName=imageSplit.split('.')[0]
  console.log(imageName)

   //Deleting image from cloudinary
  const resultImage=await cloudinary.uploader.destroy(imageName)
  res.status(200).json({message:resultImage})

  //inserting new image in cloudinary
  const file=req.files.image
  const result = await cloudinary.uploader.upload(file.tempFilePath)
  console.log(result)
  const data={
    image:result.url||product.image,
        category:req.body.category||product.category,
        brand:req.body.brand||product.brand,
        fabric:req.body.fabric||product.fabric,
        size:req.body. size||product. size,
        condition:req.body.condition||product.condition,
        gender:req.body.gender||product.gender,
        originPrice:req.body.originPrice||product.originPrice, 
        sellingPrice:req.body.sellingPrice||product.sellingPrice,
        tags:req.body. tags||product. tags,
  }
  //update product
  
  const updatedProduct = await Product.findByIdAndUpdate(req.query.id, data,{
    new: true,
  })
  res.status(200).json(updatedProduct)


})
//api/products/deleteProduct?id=id&url=imageUrl
//delete req
//private
const deleteProduct=asyncHandler(async(req,res)=>{
  let product = await Product.findById(req.query.id);

  if (!product) {
    res.status(400)
    throw new Error('Product not found')
  }
   // Check for user
   if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  //Getting image name from image url
  const imageUrl=req.query.url
  const imageUrlArray=imageUrl.split('/')
  const image=imageUrlArray[imageUrlArray.length-1]
  const imageName=image.split('.')[0]
  console.log(imageName)
  //Deleting product
 await Product.deleteOne({_id:req.query.id})
  //Deleting image from cloudinary
  .then(result=>{
    cloudinary.uploader.destroy(imageName,(error,result)=>{
      console.log(error,result)
    })
    res.status(200).json({message:result})

  })
  .catch(error=>{
    console.log(error)
    res.status(500).json({Error:error})
  })

})
module.exports={createProduct,getProduct,editProduct,deleteProduct,}