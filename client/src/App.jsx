import Loader from './components/stateless/Loader';
import Error from './components/stateless/Error';
import Header from './components/stateless/Header';

import Main from './components/Main';
import Footer from './components/Footer';
import StartScreen from './components/StartScreen';
import Progress from './components/Progress';
import Question from './components/Question';
import Timer from './components/Timer';
import NextButton from './components/NextButton';
import FinishedScreen from './components/FinishedScreen';
import CancelButton from './components/CancelButton';

import { useQuiz } from './context/QuizContext';

function App() {
  const { status, currQuestionIndex, selectedAnswer, numQuestions } = useQuiz();

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <section>
            <Progress />
            <Question />
            <Footer>
              <div className='btns-group'>
                <Timer />
                {(currQuestionIndex < numQuestions - 1 ||
                  selectedAnswer === null) && <CancelButton />}
              </div>

              <NextButton />
            </Footer>
          </section>
        )}
        {status === 'finished' && <FinishedScreen />}
      </Main>
    </div>
  );
}

export default App;
