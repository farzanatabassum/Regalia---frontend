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
//api/products/deleteProduct?id=id&url=imageUrl
//delete req
//private
const deleteProduct=asyncHandler(async(req,res)=>{
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
module.exports={createProduct,getProduct,deleteProduct,}