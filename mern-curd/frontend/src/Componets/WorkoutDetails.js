import React from 'react'
import workoutModel from '../../../backend/models/workoutModel'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='workout-details'>
        <h4>{workoutModel.title}</h4>
        <p><strong>Load (Kg):</strong>{workoutModel.load}</p>
        <p><strong>Reps:</strong>{workoutModel.resp}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails