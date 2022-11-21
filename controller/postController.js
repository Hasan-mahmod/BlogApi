const Post=require('../models/postModel')
//import Post from '../models/postModel';

exports.createpost = async (req,res,next)=>{
   // return res.status(200).json({message:"Hello from post create"})
    req.body.userName= req.user.userName ;
    const { title,postBody, category,userName,postpic } = req.body;
    try {
        const post = await Post.create({
            title, userName, postBody, category, postpic
        })

        res.status(200).json(post)
    } catch (error) {
        res.status(401).json({ message: error })
    }
   
}
exports.updatepost=async (req,res,next)=>{
    const postId=req.params.postId
    req.body.userName= req.user.userName ;
    try {
        const post = await Post.findById(postId)
        if(!post){
            return res.status(401).json({message:"Post not found ! "})
        }else if(post.userName!=req.user.userName){
            return res.status(401).json({message:"You can update only your post..! "})
        }
        
        const updatedpost=await Post.findByIdAndUpdate(postId,req.body,{new:true,})
        res.status(200).json({message:"Post update successfully ! ", updatedpost})
        
    } catch (error) {
        res.status(401).json({ message:"You can update only your post..! ", error })
    }
}
exports.deletepost=async (req,res,next)=>{
    let postId=req.params.postId;
    try {
        const post = await Post.findById(postId)
        if(!post){
            return res.status(401).json({message:"Post not found ! "})
        }else if(post.userName!=req.user.userName){
            return res.status(401).json({message:"You can delete only your post..! "})
        }
        
        const deletedpost=await Post.findByIdAndDelete(postId)
        res.status(200).json({message:"Post Delete successfully ! ", deletedpost})
    } catch (error) {
        res.status(401).json({ message:"You can delete only your post..! ", error })
    }
}
exports.getallpost=async (req,res,next)=>{
    const {userName,category}=req.query;
    let posts;
    try {
        if(userName){
            posts=await Post.find({userName})
        }else if(category){
            posts=await Post.find({category:{$in:[category,]},})
        }else{
            posts=await Post.find();
        }
        res.status(200).json(posts)
    } catch (error) {
        res.status(401).json({message:"something went wrong ! "+error})
    }
}
exports.getpost=async (req,res,next)=>{
    let postId=req.params.postId;
    try {
        res.status(200).json(await Post.findById(postId))
    } catch (error) {
        res.status(401).json({message:"something went wrong ! "+error})
    }
}