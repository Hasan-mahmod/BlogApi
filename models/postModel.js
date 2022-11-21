const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    postBody:{type:String,required:true},
    category:{type:Array,required:false},
    userName:{type:String,trim:true,default:"admin"},
    postpic:{type:String,default:"post-avater.jpg"}
},{
    timestamps:true
})
const postModel=mongoose.model("Post",postSchema)
module.exports=postModel;