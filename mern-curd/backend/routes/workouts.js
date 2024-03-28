const express =require('express')

const Workout = require('../models/workoutModel')

const router = express.Router()

//Get All workouts
router.get('/' ,(req , res)=>{
   res.json({mesg:"Get all workouts"})
})

//Get a single workout
router.get('/:id' ,(req , res)=>{
    res.json({mesg:"Get a Single workout"})
 })
 
 //POST a new WorkOut
 router.post('/' , async (req ,res)=>{
   const{title , load ,resp} = req.body
   try{
      const workout = await Workout.create({title , load ,resp})
      res.status(200).json(workout)

   }
   catch (error){
      res.status(400).json({error: error.message})
   }
    res.json({mesg:'POST a new workout'})
 })

 //DELETE a workout
 router.delete('/:id',(req ,res)=>{
    res.json({mesg:'DELETE a workout'})
 })

//Updata a workout

router.patch('/:id',(req ,res)=>{
    res.json({mesg:'Update a workout'})
})

module.exports = router