const mongoose=require('mongoose')

const userroleSchema=new mongoose.Schema({
    //user one
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    //role one
    role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"},
   
},{
    timestamps:true
})

const userroleModel=mongoose.model('UserRole',userroleSchema)
module.exports=userroleModel;