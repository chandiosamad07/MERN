import React, { useEffect, useState } from "react";
import WorkoutDetails from '../Componets/WorkoutDetails';

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');

        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }

        // Parse the response as JSON
        const json = await response.json();
        
        // Update state with the parsed JSON data
        setWorkouts(json);
      } catch (error) {
        // Handle any errors that occur during the fetch or parsing
        console.error("Error fetching or parsing data:", error);
        setError(error.message);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      {/* Display error message if there's an error */}
      {error && <div>Error: {error}</div>}
      
      {/* Display workouts if available */}
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Home;
