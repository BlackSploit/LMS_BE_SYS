const express = require("express");
const {createUserRoutes} = require('./user');
const app = express();

createUserRoutes(app);


app.post("/course/purchase",function(req,res){
    res.json({
        message: "to purchase a course"
    })
})

app.get("/courses",function(req,res){
    res.json({
        message: "get courses"
    })
})


app.listen(3000);



