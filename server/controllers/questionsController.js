import questions from '../data/questions.js';

// let questions = [];
// const questions = fetch('./data/questions.json')
//   .then((results) => results.json())
//   .then(console.log);

// @ /api/v1/questions/
// GET Get all questions
// Public
const getQuestions = (req, res) => {
  if (questions.length === 0) {
    res.status(400).json({ message: 'No questions' });
    return;
  }
  res.status(200).json(questions);
};

export { getQuestions };
