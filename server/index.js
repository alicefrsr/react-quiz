import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import questionsRoute from './routes/questionsRoute.js';

const app = express();
const PORT = 8000; // cli (mac) $export=PORT=8000
app.use(cors());

// app.use(bodyParser.json());
// app.use(express.json());

app.use('/api/v1/questions', questionsRoute);

app.get('/api/v1', (req, res) => {
  res.status(200).send('Welcome to this very basic Quiz questions API');
});

app.listen(PORT, () => {
  console.log(
    `Express server running on port ${PORT}. Go to /api/v1/questions for API.`
  );
});
