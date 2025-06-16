// const express=require('express');
// const adminRoutes=express.Router();


// adminRoutes.post("/purchase",function(req,res){
//     res.json({
//         message: "to purchase a course"
//     })
// })


// adminRoutes.get("/",(req,res)=>{
//     res.json({
//         message:"get course"
//     })
// })

// module.exports = {
//     adminRoutes: adminRoutes
// }



const {Router} = require("express");
const adminRouter = Router();


const {adminModel, courseModel} = require('../db');


const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config")


