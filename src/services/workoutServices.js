const { v4: uuidv4 } = require('uuid');
const workoutModel = require('../databse/workout');

const getAllWorkouts = () => { 
  const allWorkouts = workoutModel.getAllWorkouts();
  return allWorkouts;
}

const getOneWorkout = () => { 
  return; 
}

const createNewWorkout = (newWorkout) => { 
  const workoutToInsert = {
    id: uuidv4(),
    ...newWorkout,
    createdAt: new Date().toLocaleDateString('en-us',{ timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleDateString('en-us',{ timeZone: 'UTC' }),
  }
  const createWorkout = workoutModel.createNewWorkout(workoutToInsert);
  return createWorkout;
}

const updateWorkout = () => { 
  return; 
}

const deleteWorkout = () => { 
  return; 
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
}