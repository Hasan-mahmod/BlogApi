const Category=require("../models/categoryModel")

exports.createCategory=async (req,res,next)=>{
    req.body.userName= req.user.userName ;
    const { name,userName, icon } = req.body;
    try {
        const post = await Category.create({
            name, userName, icon
        })

        res.status(200).json(post)
    } catch (error) {
        res.status(401).json({ message: error })
    }
}
exports.updateCategory=async (req,res,next)=>{
    const catId=req.params.catId
    req.body.userName= req.user.userName ;
    try {
        const category = await Category.findById(catId)
        if(!post){
            return res.status(401).json({message:"Category not found ! "})
        }else if(category.userName!=req.user.userName){
            return res.status(401).json({message:"You can update only your post..! "})
        }
        
        const updateCategory=await Category.findByIdAndUpdate(catId,req.body,{new:true,})
        res.status(200).json({message:"Category update successfully ! ", updateCategory})
        
    } catch (error) {
        res.status(401).json({ message:"You can update only your Category..! ", error })
    }
}
exports.deleteCategory=async (req,res,next)=>{
    let catId=req.params.catId;
    try {
        const category = await Category.findById(catId)
        if(!category){
            return res.status(401).json({message:"Post not found ! "})
        }else if(category.userName!=req.user.userName){
            return res.status(401).json({message:"You can delete only your post..! "})
        }
        
        const deletedCategory=await Category.findByIdAndDelete(catId)
        res.status(200).json({message:"Category Delete successfully ! ", deletedCategory})
    } catch (error) {
        res.status(401).json({ message:"You can delete only your Category..! ", error })
    }
}
exports.getallCategory=async (req,res,next)=>{
    const {userName}=req.query;
    let category;
    try {
        if(userName){
            category=await Category.find({userName})
        }else{
            category=await Category.find();
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(401).json({message:"something went wrong ! "+error})
    }
}