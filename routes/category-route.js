const { createCategory, updateCategory, deleteCategory, getallCategory } = require('../controller/categoryController');
const { userauthMiddleware } = require('../middlewares/user-auth');
const categoryRoute=require('express').Router();


categoryRoute.post("/",userauthMiddleware,createCategory)
categoryRoute.put("/",userauthMiddleware,updateCategory)
categoryRoute.delete("/",userauthMiddleware,deleteCategory)
categoryRoute.get("/",userauthMiddleware,getallCategory)

module.exports=categoryRoute;