const express=require("express");
const app=express();
const morgan=require('morgan')
const connectDB=require("./config/connectDB");
const categoryRoute = require("./routes/category-route");
const userRoute = require("./routes/user-route");
const postRoute = require("./routes/post-route");
// const dotenv=require('dotenv');
// dotenv.config();
require('dotenv').config()
app.use(express.json())
app.use(morgan('dev'))
const PORT=5000;
//const PORT = process.env.PORT; //4000

//routes 
app.use("/api/user",userRoute)
app.use("/api/post",postRoute)
app.use("/api/category",categoryRoute)

app.listen(PORT,()=>{
    console.log(process.env.PROCESSOR_IDENTIFIER)
    console.log(process.env.OS)
    console.log(process.env.PROCESSOR_ARCHITECTURE)
    console.log(process.env.PORT)
    console.log(`server is running at ${PORT}`);
    connectDB();
})