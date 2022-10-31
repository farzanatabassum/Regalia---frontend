const express=require('express')
const dotenv=require('dotenv').config()
const {connect}=require('mongoose')
const connDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT||5000
const app=express()
connDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/users',require('./routes/user.route'))
app.listen(port,()=>{
    console.log(`Starting port ${port}`)
})
