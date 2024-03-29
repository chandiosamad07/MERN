const express =require('express')

const {createWorkout ,getWorkout,getWorkouts} = require('../controllers/workoutcontroller')
const router = express.Router()

//Get All workouts
router.get('/' ,getWorkouts)

//Get a single workout
router.get('/:id' ,getWorkout)
 
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