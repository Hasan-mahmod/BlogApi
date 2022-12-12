const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fname:{type:String,trim:true},
    lname:{type:String,trim:true},
    userName:{type:String,trim:true,required:true,unique:true},
    email:{type:String,trim:true,required:true,unique:true,
    //   validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("Please provide the valid email address");
    //   }
    // },
  },
    Phone:{type:String,trim:true},
    password:{type:String,trim:true,required:true,unique:true},
    // email:{type:String,trim:true,required:true,unique:true},
    profilepic:{type:String,default:"avater.jpg"},
    enabled:{type:Boolean,default:true},
    //UserRole many
    userroles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserRole"
        }
      ]
},{
    timestamps:true
})
// Delete all user role from userrole model
//
// userSchema.pre("deleteOne",function(next){
//     const id = this.getQuery()['_id'];  // travel id check
//     // Query to get all the product ids based on the travel id and return array for `$in`
//     const productIds = this.DoYourQuery  // [productIds] check
//     UserRole.deleteMany({'user': { $in: productIds }}, // ... etc
//     Product.deleteMany({ _id': { $in: productIds }}, // ... etc
//     next();   

//     const id=this.getQuery()['_id'];
//     UserRole.deleteMany({user:id},(err,val)=>{

//     })
//     next();
// })

const userModel=mongoose.model('User',userSchema)
module.exports=userModel;