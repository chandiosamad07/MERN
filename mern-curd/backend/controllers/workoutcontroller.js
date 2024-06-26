const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
//Get all workouts

const getWorkouts = async (req, res) => {
  try {
    // Assuming Workout is a Mongoose model
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// Create new workout
const createWorkout = async (req, res) => {
  const { title, load, resp } = req.body;

  //added to DB
  try {
    const workout = await Workout.create({ title, load, resp });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//delete a workout

const deleteworkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
      }
      const workout = await Workout.findOneAndDelete({_id: id})
      if (!workout) {
        return res.status(400).json({ error: "No such workout" });
      }
      res.status(200).json(workout)
};

//update a workout

const updateworkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
      }
      const workout = await Workout.findByIdAndUpdate(id, {
        ...req.body
    }, { new: true });
    
      if (!workout) {
        return res.status(400).json({ error: "No such workout" });
      }
      res.status(200).json(workout)
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteworkout,
  updateworkout
};
