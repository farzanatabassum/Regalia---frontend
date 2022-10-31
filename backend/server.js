const express=require('express')
const dotenv=require('dotenv').config()
const {connect}=require('mongoose')
const connDB=require('./config/db')
const port=process.env.PORT||5000
const app=express()
connDB()
app.listen(port,()=>{
    console.log(`Starting port ${port}`)
})
