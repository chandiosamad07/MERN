require('dotenv').config();
const express = require("express");
const mongoose =require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express App
const app =express();

//middleware 
app.use(express.json())

//routes
app.use('/api/workouts',workoutRoutes)

//connect to DB

mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    // listen for requests
app.listen(process.env.PORT,()=>{
    console.log("Listening on port" , process.env.PORT||3000)
})
})
.catch((error)=>{
console.log(error)
})

