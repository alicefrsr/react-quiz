import { useQuiz } from '../context/QuizContext';

function StartScreen() {
  // console.log('startscreen');
  const { dispatch, numQuestions, SECONDS_PER_QUESTIONS } = useQuiz();

  const totalSecs = numQuestions * SECONDS_PER_QUESTIONS;
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;

  return (
    <section className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery.</h3>
      <p>
        You have {mins < 10 && 0}
        {mins}:{secs < 10 && 0}
        {secs} minutes to complete the quiz.
      </p>
      <button className='btn' onClick={() => dispatch({ type: 'start' })}>
        Start the Quiz{' '}
      </button>
    </section>
  );
}

export default StartScreen;
