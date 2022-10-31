const User=require('../models/user.model')
const asyncHandler=require('express-async-handler')
const register=asyncHandler(async(req,res)=>{
    res.json({message:'User Created'})
}

)
const login=asyncHandler(async(req,res)=>{
    res.json({message:'User logged in'})
}

)
const getUser=asyncHandler(async(req,res)=>{
    res.json({message:'Display user data'})
}

)
module.exports={register,login,getUser,}
