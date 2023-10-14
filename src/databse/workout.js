const db = require('./db.json');
const { saveDataBase} = require('./utils');

const getAllWorkouts = () =>  {
  return db.workouts;
};


const createNewWorkout = (newWorkout) => {
  const isAlreadyExists = (db.workouts.findIndex(
    (workout) => workout.name === newWorkout.name
  )) > -1;
  
  if(isAlreadyExists) return;

  db.workouts.push(newWorkout);
  saveDataBase(db);
  return newWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };