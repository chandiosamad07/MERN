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
 
 //POST a new WorkOut
 router.post('/' ,(req ,res)=>{
    res.json({mesg:'POST a new workout'})
 })

 //DELETE a workout
 router.delete('/:id',(req ,res)=>{
    res.json({mesg:'DELETE a workout'})
 })


module.exports = router