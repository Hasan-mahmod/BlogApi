const mongoose=require('mongoose')

const roleSchema=new mongoose.Schema({
    
    roleName:{type:String,trim:true,required:true,unique:true},
    
    enabled:{type:Boolean,default:true},
    userroles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserRole"
        }
      ]
},{
    timestamps:true
})

const roleModel=mongoose.model('Role',roleSchema)
module.exports=roleModel;