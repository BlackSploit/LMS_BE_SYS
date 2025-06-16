// const express=require('express');
// const adminRoutes=express.Router();




// module.exports = {
//     adminRoutes: adminRoutes
// }



const {Router} = require("express");

const {adminModel, courseModel} = require('../db');

const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");

const {adminMiddleware} = require('../middleware/admin')




const adminRouter = Router();



adminRoutes.post("/purchase",function(req,res){
    res.json({
        message: "to purchase a course"
    })
})


adminRoutes.get("/",(req,res)=>{
    res.json({
        message:"get course"
    })
})


adminRoutes.post("/signup",async function(req,res){
    const {email, password, firstNmae, lastName} =req.body;

    
})