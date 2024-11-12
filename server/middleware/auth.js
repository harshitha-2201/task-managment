
const jwt = require('jsonwebtoken')
const User = require('../schema/userSchema')

module.exports = async(req,res , next) =>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({message : " auth Error"})

    }
    try{
        const decode = jwt.verify(token,process.env.JWT_Secrete)
        req.user = await User.findById(decode.userId)
         next()
    }catch(err){
        res.status(500).json({message : "Invalid Token"})
    }
}