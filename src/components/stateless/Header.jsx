import reactLogo from '../../assets/img/logo512.png';

function Header() {
  return (
    <header className='app-header'>
      <img src={reactLogo} alt='React logo' />
      <h1>
        The <span>React</span> Quiz
      </h1>
    </header>
  );
}

export default Header;
