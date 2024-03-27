require('dotenv').config();
const express = require("express");
const workoutRoutes = require('./routes/workouts')

//express App
const app =express();

//middleware 

app.use(express.json())

//routes
app.use('/api/workouts',workoutRoutes)


// listen for requests
app.listen(process.env.PORT,()=>{
    console.log("Listening on port" , process.env.PORT)
})