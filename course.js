


function CourseRouters(app){
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
    
}


module.exports = {
    createCourse : createCourse
}