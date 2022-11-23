const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name'],
    },
    email:{
        type:String,
        required:[true, 'Please provide an email'],
        unique:true,
    },
    gender:{
        type:String,
        required:[true, 'Please select a gender'],

    },
    password:{
        type:String,
        required:[true, 'Please provide a password'],
        minlength:7,
    },
    // productPreferences:{
    //     summer:{
    //         type:Boolean,
    //         default:false,
    //     }
    
    // }
},{
    timestamps:true,
})


module.exports=mongoose.model("User",userSchema)
