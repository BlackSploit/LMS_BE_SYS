const express = require("express");


const userRouter = express.Router();

userRouter.post("/signup", function(req,res){
    res.json({
      message: "signup endpoint"  
    })
})


userRouter.post("/signin",function(req,res){

    res.json({
        message: "signin endpoint"
    })
})


userRouter.post("/purchase",function(req,res){
    res.json({
        message: "purchase endpoint"
    })
})


userRouter.get("/purchases",function(req,res){
    res.json({
        message: "you havent purchase any course"
    })
})

module.exports ={
    userRouter: userRouter
}