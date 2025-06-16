function UserRouters(app){
    app.post("/user/signup", function(req,res){
        res.json({
          message: "signup endpoint"  
        })
    })
    
    
    app.post("/user/signin",function(req,res){
    
        res.json({
            message: "signin endpoint"
        })
    })
    
    
    app.post("/user/purchase",function(req,res){
        res.json({
            message: "purchase endpoint"
        })
    })
    
}


module.exports = {
    createUserRoutes: createUserRoutes
}