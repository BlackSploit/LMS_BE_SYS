const express = require("express");
const {createUserRoutes} = require('./user');
const {createCourse} = require('./course')
const app = express();






createUserRoutes(app);

createCourse(app);




app.listen(3000);



