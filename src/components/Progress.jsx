import { useQuiz } from '../context/QuizContext';

function Progress() {
  // console.log('progress');
  const {
    currQuestionIndex,
    selectedAnswer,
    points,
    numQuestions,
    maxPossiblePoints,
  } = useQuiz();
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        // value={selectedAnswer ? currQuestionIndex + 1 : currQuestionIndex}
        value={currQuestionIndex + Number(selectedAnswer !== null)}
      />
      <p>
        Question <strong>{currQuestionIndex + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
