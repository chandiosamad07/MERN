const express =require('express')

const router = express.Router()

//Get All workouts
router.get('/' ,(req , res)=>{
   res.json({mesg:"Get all workouts"})
})



module.exports = router