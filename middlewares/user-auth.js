const User= require("../models/userModel")
const jwt= require('jsonwebtoken')


exports.userauthMiddleware = async (req, res, next) => {
  
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ messase: "Access not allowed!" })
        }
        let onlytoken = token.split(' ')[1]
        const validuser = jwt.verify(onlytoken, process.env.PRIVAT_KEY)
        let user = await User.findById(validuser._id)
        req.user=user;
        next();
    } catch (error) {
        res.status(401).json({ messase: "Authentication failed" })
    }
}