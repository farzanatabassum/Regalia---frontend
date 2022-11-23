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
    productPreference:{
        summer:{
            type:Boolean,
            default:false,
        },
        winter:{
            type:Boolean,
            default:false,
        },
        casual:{
            type:Boolean,
            default:false,
        },
        traditional:{
            type:Boolean,
            default:false,
        },
        formal:{
            type:Boolean,
            default:false,
        },
        sportsWear:{
            type:Boolean,
            default:false,

        }
    
    },
},{
    timestamps:true,
})


module.exports=mongoose.model("User",userSchema)
