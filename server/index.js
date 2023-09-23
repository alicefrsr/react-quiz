import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
import questionsRoute from './routes/questionsRoute.js';

const app = express();
const PORT = 8000; // cli (mac) $export=PORT=8000
// app.use(cors());

// app.use(bodyParser.json());
// app.use(express.json());

app.use('/questions', questionsRoute);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to this very basic Quiz questions API');
});

app.listen(PORT, () => {
  console.log(
    `Express server running on port ${PORT}. Go to /questions for API.`
  );
});
