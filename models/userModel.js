const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,trim:true,required:true},
    userName:{type:String,trim:true,required:true,unique:true},
    email:{type:String,trim:true,required:true,unique:true},
    password:{type:String,trim:true,required:true,unique:true},
    // email:{type:String,trim:true,required:true,unique:true},
    profilepic:{type:String,default:"avater.jpg"}
},{
    timestamps:true
})

const userModel=mongoose.model('User',userSchema)
module.exports=userModel;