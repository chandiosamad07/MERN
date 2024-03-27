const express =require('express')

const router = express.Router()

//Get All workouts
router.get('/' ,(req , res)=>{
   res.json({mesg:"Get all workouts"})
})

//Get a single workout
router.get('/:id' ,(req , res)=>{
    res.json({mesg:"Get a Single workout"})
 })
 

module.exports = router