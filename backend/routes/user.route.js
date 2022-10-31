const express=require('express')
const router=express.Router()
const {register,login,getUser}=require('../controllers/user.controller')
router.route('/signup').post(register)
router.route('/login').post(login)
router.route('/me').get(getUser)
module.exports=router
