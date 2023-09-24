import questions from '../data/questions.js';
// import questions from '../data/questionsCopy.json';

// @desc Get all questions
// @route GET /api/v1/questions
// @access Public
const getQuestions = (req, res) => {
  if (questions.length === 0) {
    res.status(400).json({ message: 'No questions' });
    return;
  }
  res.status(200).json(questions);
};

export { getQuestions };
