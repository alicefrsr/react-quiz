import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

function Timer() {
  const { dispatch, remainingSeconds } = useQuiz();

  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    // cleanup
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <div className='timer'>
        {mins < 10 && '0'}
        {mins}:{secs < 10 && '0'}
        {secs}
      </div>
    </>
  );
}

export default Timer;
