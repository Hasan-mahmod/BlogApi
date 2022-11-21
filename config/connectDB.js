const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URLS)
        console.log('Database connect success')
    } catch (err) {
        console.log('Database connection fail !! ' + err)
    }
}
module.exports=connectDB;