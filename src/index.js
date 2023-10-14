const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const v1RouterWorkouts = require('./v1/routes/workoutRoutes');

// Alternativa nativa a body parser
app.use(express.json());
app.use('/api/v1/workouts',v1RouterWorkouts);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
