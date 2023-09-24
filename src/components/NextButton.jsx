import { useQuiz } from '../context/QuizContext';

function NextButton() {
  const { dispatch, selectedAnswer, numQuestions, currQuestionIndex } =
    useQuiz();

  if (selectedAnswer === null) return null;

  if (currQuestionIndex < numQuestions - 1)
    return (
      <button
        className='btn'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next question{' '}
      </button>
    );
  if (currQuestionIndex === numQuestions - 1)
    return (
      <button className='btn' onClick={() => dispatch({ type: 'finish' })}>
        Done! See results{' '}
      </button>
    );
}

export default NextButton;
