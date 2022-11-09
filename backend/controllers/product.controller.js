const Product=require('../models/product.model')
const asyncHandler=require('express-async-handler')

//api/products/create
//post req
//private
const createProduct=asyncHandler(async(req,res)=>{
    
  
    const {filename}=req.file
    const {category,brand,fabric,size,condition,gender,originPrice, sellingPrice,tags}=req.body
    console.log(req.file)

    //Any Input field is empty
    if(!filename||!category||!brand||!fabric||!size||!condition||!gender||!originPrice||!sellingPrice||!tags){
        res.status(400)
        throw new Error("Please add all fields")
    }
    // let arrTags=[]
    // for(let i=0;i<req.body.length;i++){
    //     arrTags[i]=req.body[i].tags
    // }

    const product=await Product.create({
        image:filename,
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

module.exports={createProduct,}