const express=require('express');
const adminRoutes=express.Router();


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

module.exports = {
    adminRoutes: adminRoutes
}