const User=require('../models/user.model')
const asyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const register=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    if(!name||!email||!password){
        res.status(400)
        throw new Error("Please add all fields")
    }
    const userExist=await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }
    const user=await User.create({
        name,
        email,
        password,

    })
    if(user){
        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
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
//generate a token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}

module.exports={register,login,getUser,}
