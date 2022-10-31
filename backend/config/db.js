const mongoose=require('mongoose')
const connDB=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGODB)
        console.log('MongoDB connected')
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
module.exports=connDB