const express=require('express')
const router=express.Router()
const {register,login,getUser}=require('../controllers/user.controller')
//signup
//public
router.route('/signup').post(register)
//login
//public
router.route('/login').post(login)
//getUser
//private
router.route('/me').get(getUser)
module.exports=router
