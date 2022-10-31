const express=require('express')
const dotenv=require('dotenv').config()
const {connect}=require('mongoose')
const port=process.env.PORT||5000
const app=express()

app.listen(port,()=>{
    console.log(`Starting port ${port}`)
})
