const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SALT_NUMBER=12;
//const file= require('../middlewares/file-upload')

exports.singup = async (req, res, next) => {
   
    // const file1=file.upload(req.body.file)
    // console.log(file1)
    // req.body.profilepic=file1;

    req.body.password = await bcrypt.hash(req.body.password, SALT_NUMBER)
    const { name, userName, email, password, profilepic } = req.body;
    try {
        const user = await User.create({
            name, userName, email, profilepic, password
        })
        res.status(201).json({ message: `Hello ${name} ! Your account has been created.` })
    } catch (error) {
        res.status(401).json({ message: error })
    }
   // res.send("Hello Hasan from controller")
}
exports.login = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        const user = await User.findOne({userName})
        if (!user) {
            return res.status(401).json({ message: "User not found." })
        }
        const validate = await bcrypt.compare(password, user.password)
        if (!validate) {
            return res.status(400).json({ message: "Password not matched ! " })
        }
        const token = jwt.sign({ userName, _id: user._id }, process.env.PRIVAT_KEY, { expiresIn: "2h" })
        res.status(200).json({ message: "Login Success", token: token })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.updateprofile=async (req,res,next)=>{
    const userId=req.params.userId;
    //console.log(req.params.userId)
    try {
        const user=await User.findById(userId) 
        if(!user){
            return res.status(400).json({message:"Wrong user ! "})
        }
       
        if(userId!=req.user._id){
            return res.status(401).json({message:"This is not your profile. Only you can update your profile ! "})
        }

        req.body.password=await bcrypt.hash( req.body.password,SALT_NUMBER)
        const updateuser=await User.findByIdAndUpdate(userId,req.body,{new:true})
        res.status(200).json({message: "User update success",updateuser})

    } catch (error) {
        res.status(401).json({message:"You can update only your account",error})
    }
}

exports.deletemyprofile=async (req,res,next)=>{
    let userId=req.params.userId;
    try {
        const user=await User.findById(userId)
        if(!user){
            return res.status(400).json({message:"Wrong User"})
        }
        if(userId!=req.user._id){
            return res.status(401).json({message:"This is not your profile.You can delete only your profile ! "})
        }
        const deleteduser=await User.findByIdAndDelete(userId)
        res.status(200).json({message:`User ${deleteduser.userName} deleted success`})
    } catch (error) {
        res.status(401).json(error.message)
    }
}

exports.getallUser=async (req,res,next)=>{
    //req.user.password=bcrypt.decrypt(req.user.password)
    try {
        let alluser=await User.find()
        res.status(200).json(alluser)
    } catch (error) {
        res.status(401).json(error.message)
    }
}
