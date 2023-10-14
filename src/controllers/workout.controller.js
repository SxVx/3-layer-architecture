const workoutServices = require('../services/workoutServices');

const getAllWorkouts = (req,res) => {
  const allWorkouts = workoutServices.getAllWorkouts();
  res.status(200).json({ status: 'OK', data: allWorkouts }); 
};

const getOneWorkout = (req,res) => {
  const getOneWorkout = workoutServices.getOneWorkout(req.params.workoutId);
  res.send(`Get one workout ${req.params.workoutId}`);
};

const createNewWorkout = (req,res) => {
  const {  body } = req;


  if( !body.name || 
    !body.duration || 
    !body.description || 
    !body.exercises
  ){
    return res.status(422).json({ status: 'fail', data: 'Incomplete data' });
  }
  
  const newWorkout = {
    name: body.name,
    description: body.description,
    duration: body.duration,
    exercises: body.exercises
  };

  const createWorkout = workoutServices.createNewWorkout(newWorkout);
  res.status(201).json({ status: 'Ok', data: createWorkout });
};

const updateWorkout = (req,res) => {
  const updateWorkout = workoutServices.updateWorkout(req.params.workoutId);
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteWorkout = (req,res) => {
  const deleteWorkout = workoutServices.deleteWorkout(req.params.workoutId);
  res.send(`Delete workout ${req.params.workout}`);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
}