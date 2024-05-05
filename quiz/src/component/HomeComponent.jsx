import React from 'react';
import './HomeComponent.css';

function HomeComponent({ onPlayClick }) {
  return (
    
    <div className="home-container">
      <h1>Quiz App</h1>
      <button onClick={onPlayClick}>Play</button>
    </div>
  );
}

export default HomeComponent;
