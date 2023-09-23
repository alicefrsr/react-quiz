import questions from '../data/questions.js';


// @ /questions/
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
