const { userauthMiddleware } = require('../middlewares/user-auth');
const {createpost, updatepost,deletepost, getallpost,getpost} =require("../controller/postController")
const postRoute=require('express').Router();


postRoute.post("/",userauthMiddleware,createpost)
postRoute.put("/:postId",userauthMiddleware,updatepost)
postRoute.delete("/:postId",userauthMiddleware,deletepost)
postRoute.get("/",getallpost)
postRoute.get("/:postId",getpost)

module.exports=postRoute;