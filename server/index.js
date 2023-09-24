import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import questionsRoute from './routes/questionsRoute.js';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import fs from 'fs';

const app = express();
const PORT = 8000; // cli (mac) $export=PORT=8000
app.use(cors());

// app.use(bodyParser.json());
// app.use(express.json());

app.use('/api/v1/questions', questionsRoute);
app.get('/api/v1', (req, res) => {
  res
    .status(200)
    .send(
      'Welcome to this very basic Quiz API --> 15 questions on /api/v1/questions'
    );
});

// app.get('/api/v1/questions', (req, res) => {
//   fs.readFile(
//     __dirname + '/data/' + 'questionsCopy.json',
//     'utf8',
//     (err, data) => {
//       res.end(data);
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(
    `Express server running on port ${PORT}. Go to /api/v1/questions to see data.`
  );
});
