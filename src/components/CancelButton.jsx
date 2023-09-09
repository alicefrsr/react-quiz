import { useQuiz } from '../context/QuizContext';

function CancelButton() {
  const { dispatch } = useQuiz();
  return (
    <button className='btn btn-ui' onClick={() => dispatch({ type: 'finish' })}>
      Exit
    </button>
  );
}

export default CancelButton;
