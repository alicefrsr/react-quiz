import { useQuiz } from '../context/QuizContext';
import RestartButton from './RestartButton';

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <section className='finish'>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className='highscore'>Highscore: {highscore} points</p>
      <RestartButton dispatch={dispatch} />
    </section>
  );
}

export default FinishedScreen;
