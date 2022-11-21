const { singup, login, getallUser, updateprofile, deletemyprofile } = require("../controller/userController");
const { userauthMiddleware } = require("../middlewares/user-auth");
const file= require('../middlewares/file-upload')

const userRoute=require("express").Router()

userRoute.post("/singup",singup)
// userRoute.post("/",(req,res,next)=>{
//  res.send("Hello Hasan from router")
// })
userRoute.get("/alluser",userauthMiddleware,getallUser)
userRoute.post("/login",login)
userRoute.put("/updateprofile/:userId", userauthMiddleware , updateprofile)
userRoute.delete("/:userId", userauthMiddleware , deletemyprofile)
userRoute.post("/imageupload" , file.upload.single('file'), (req,res)=>{
   // console.log(req.file)
    res.send(req.file.filename)
})
// userRoute.post("/imageuploadmulti" , fieupload.upload.array('file',12), (req,res,next)=>{
//     res.send(req.file.filename)
// })

module.exports=userRoute;