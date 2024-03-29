const express =require('express')

const {createWorkout} = require('../controllers/workoutcontroller')
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
 router.post('/' , createWorkout)

 //DELETE a workout
 router.delete('/:id',(req ,res)=>{
    res.json({mesg:'DELETE a workout'})
 })

//Updata a workout

router.patch('/:id',(req ,res)=>{
    res.json({mesg:'Update a workout'})
})

module.exports = router