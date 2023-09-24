import { createContext, useContext, useEffect, useReducer } from 'react';

// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://react-quiz-weld.vercel.app';

const QuizContext = createContext();

const SECONDS_PER_QUESTIONS = 10; // passed in value

// reducer: initial state + reducer fn
const initialState = {
  questions: [],
  status: 'loading', // 'error', 'ready', 'active', 'finished'
  currQuestionIndex: 0,
  selectedAnswer: null,
  points: 0,
  highscore: 0,
  remainingSeconds: null, // calculate when we know number of questions, when status = 'start'
};

function quizReducer(state, action) {
  console.count('reducer function called');
  const currQuestion = state.questions.at(state.currQuestionIndex);

  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };

    case 'dataFailed':
      return { ...state, status: 'error' };

    case 'start':
      return {
        ...state,
        status: 'active',
        remainingSeconds: state.questions.length * SECONDS_PER_QUESTIONS,
      };

    case 'newAnswer':
      // 3 things need to happen: selectedAnswer, add points, add next btn
      // 1. selectedAnswer is action.payload, ie the index we pass in when we click on an option
      // 2: before adding points, we need to know if answer is correct
      // which is the current question? atm we only know the index
      // const currQuestion = state.questions.at(state.currQuestionIndex); // moved to top to avoid eslint error
      return {
        ...state,
        selectedAnswer: action.payload, // (1.)
        points:
          action.payload === currQuestion.correctOption
            ? state.points + currQuestion.points
            : state.points, // (2.)
        // (3.) next btn will rendered conditionally depending on selectedAnswer being null or not
      };

    case 'nextQuestion':
      return {
        ...state,
        currQuestionIndex: state.currQuestionIndex + 1,
        selectedAnswer: null,
      };

    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };

    case 'tick':
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status: state.remainingSeconds === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Action unknown');
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      currQuestionIndex,
      selectedAnswer,
      points,
      highscore,
      remainingSeconds,
    },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  //   derived state
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc, question) => question.points + acc,
    0
  );

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        SECONDS_PER_QUESTIONS,
        questions,
        status,
        currQuestionIndex,
        selectedAnswer,
        points,
        highscore,
        remainingSeconds,
        numQuestions,
        maxPossiblePoints,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error('QuizContext was used outside the QuizProvider');
  return context;
}

export { QuizProvider, useQuiz };
