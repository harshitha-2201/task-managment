const express = require('express')
const User = require('../schema/userSchema')
const Router  = express.Router()

Router.post('/register' , async(req , res) =>{
    try{
        const {username , email , password} = req.body

        const newUser = new User({username , email , password});
        await newUser.save()

    }catch(err){
        res.status(500).json({message : 'Error while saving a data'})
    }
})

Router.post('/login' , async(req , res) =>{
    try{
        const {usename , email , password} = req.body;

        const user = await User.findOne({email});
        if(!email)
            return res.status(400).json({message :"email not exist"})

    }catch(err){
        res.status(500).json({message : 'Error while saving a data'})

    }
})
module.exports = Router;