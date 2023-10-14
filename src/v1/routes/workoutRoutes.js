const express = require('express');
const router = express.Router();
const controllerWorkout = require('../../controllers/workout.controller');

router
  .get('/',controllerWorkout.getAllWorkouts)

  .get('/:workoutId',controllerWorkout.getOneWorkout)

  .post('/',controllerWorkout.createNewWorkout)

  .patch('/:workoutId',controllerWorkout.updateWorkout)

  .delete('/:workoutId', controllerWorkout.deleteWorkout);

module.exports = router;