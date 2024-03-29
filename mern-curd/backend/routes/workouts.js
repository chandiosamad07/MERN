const express =require('express')

const {createWorkout ,getWorkout,getWorkouts , deleteworkout,updateworkout} = require('../controllers/workoutcontroller')
const router = express.Router()

//Get All workouts
router.get('/' ,getWorkouts)

//Get a single workout
router.get('/:id' ,getWorkout)
 
 //POST a new WorkOut
 router.post('/' , createWorkout)

 //DELETE a workout
 router.delete('/:id', deleteworkout)

//Updata a workout

router.patch('/:id',updateworkout)

module.exports = router