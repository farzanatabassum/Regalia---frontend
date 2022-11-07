const express=require('express')
const router=express.Router()
const {register,login,getUser}=require('../controllers/user.controller')
const {protect}=require('../middleware/authMiddleware')
//signup
//public
router.route('/signup').post(register)
//login
//public
router.route('/login').post(login)
//getUser
//private
router.route('/me').get(protect,getUser)
module.exports=router
