const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    postBody:{type:String,required:true},
    category:{type:Array,required:false},
    userId:{type:String,trim:true,default:0},
    postpic:{type:String,default:"post-avater.jpg"}
},{
    timestamps:true
})
const postModel=mongoose.model("Post",postSchema)
module.exports=postModel;