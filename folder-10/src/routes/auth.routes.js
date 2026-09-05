const express = require("express")
const userModel = require("../models/user.mode")
const authRouter = express.Router()
const jwt = require("jsonwebtoken") 

authRouter.post("/register", async(req,res)=>{
    const{email,name,password} = req.body

    const isUserAlreadyExist = await userModel.findOne({email})

    if(isUserAlreadyExist){
        return res.status(400).json({
            message: "User already exist with this Email address"
        })
    }
   const user = await userModel.create({
        email,password,name
    })

    const token = jwt.sign(
        {
        id: user._id
        },
        process.env.JWT_SECRET
    )


    res.cookie("jwt_token", token)
    res.status(201).json({
        message: "user Registered",
        user,
        token
    })
    
})

module.exports = authRouter