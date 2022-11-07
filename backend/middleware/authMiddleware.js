const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User=require('../models/user.model')

const protect=asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from the user
            token=req.headers.authorization.split(' ')[1]
            //Verify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            //get user from the token
             req.user=await User.findById(decoded.id).select('-password')
            next()
        

        }
        catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')

        }
    }
    //token not found
    if(!token){
        req.status(401)
        throw new Error('Not authorized, no token')
    }

})
module.exports={protect}