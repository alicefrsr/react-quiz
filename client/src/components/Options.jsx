import { useQuiz } from '../context/QuizContext';

function Options({ question }) {
  const { selectedAnswer, dispatch } = useQuiz();
  const hasAnswered = selectedAnswer !== null;
  // console.count('Options rendered');
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          // className='btn btn-option'
          className={`btn btn-option ${
            index === selectedAnswer ? 'selectedAnswer' : ''
          }
          ${
            hasAnswered &&
            (index === question.correctOption ? 'correct' : 'wrong')
          }`}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
