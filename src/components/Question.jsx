import { useQuiz } from '../context/QuizContext';
import Options from './Options';

function Question() {
  // console.log('question');
  const { questions, currQuestionIndex } = useQuiz();
  const question = questions.at(currQuestionIndex);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        // selectedAnswer={selectedAnswer}
        // dispatch={dispatch}
      />
    </div>
  );
}

export default Question;
