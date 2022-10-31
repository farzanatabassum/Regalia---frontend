const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')


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
    password:{
        type:String,
        required:[true, 'Please provide a password'],

    },
},{
    timestamps:true,
})

userSchema.pre( "save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
module.exports=mongoose.model("User",userSchema)
