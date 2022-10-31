const errorHandler=(err,res,req,next)=>{
    const statusCode=res.statusCode?res.statusCode:500
    res.staus(statusCode)
    res.json({
        message:err.message,
        stack:process.env.NODE===production?null:err.stack,
    })

}
module.exports={errorHandler,}