const express=require('express')
const dotenv=require('dotenv').config()
const {connect}=require('mongoose')
const connDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const cors=require('cors')
const port=process.env.PORT||5000
const app=express()
connDB()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
//user routes
app.use('/api/users',require('./routes/user.route'))
//product routes
app.use('/api/products',require('./routes/product.route'))
app.listen(port,()=>{
    console.log(`Starting port ${port}`)
})
