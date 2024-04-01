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
