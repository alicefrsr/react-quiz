function RestartButton({ dispatch }) {
  // console.log('restartbtn');
  return (
    <button className='btn' onClick={() => dispatch({ type: 'restart' })}>
      Restart Quiz
    </button>
  );
}

export default RestartButton;
