import React, { useState } from 'react';
import './App.css';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import ResultComponent from './component/ResultComponent';

function App() {
  const [page, setPage] = useState('home');

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const handlePlayClick = () => {
    changePage('quiz');
  };

  const handleQuitClick = () => {
    changePage('result');
  };

  return (
    <div className="App">
      {page === 'home' && <HomeComponent onPlayClick={handlePlayClick} />}
      {page === 'quiz' && <QuizComponent onQuitClick={handleQuitClick} />}
      {page === 'result' && <ResultComponent />}
    </div>
  );
}

export default App;
