// file upload by multer
const multer=require('multer')
const uploadStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, "./file/images")
    },
    filename:(req,file,callback)=>{
     //req.filename="./file/images/"+file.originalname;
     callback(null,file.originalname)
    }
})
module.exports.upload=multer({storage:uploadStorage})