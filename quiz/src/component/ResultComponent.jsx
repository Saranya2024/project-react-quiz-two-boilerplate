import React, { Component } from 'react';
import "./ResultComponent.css";

class ResultComponent extends Component {
  render() {
    const { totalQuestions, attemptedQuestions, correctAnswers, wrongAnswers } = this.props;

    return (
      <div>
        <h2>Result</h2>
        <div className="result-container">
          <b>You need more practice!</b>
          <p><b>Your score is 20%</b></p>
          <ul>
            <li>Total number of questions <span>{totalQuestions}15</span></li>
            <li>Number of attempted questions <span>{attemptedQuestions}9</span></li>
            <li>Number of correct answers <span>{correctAnswers}3</span></li>
            <li>Number of wrong answers <span>{wrongAnswers}6</span></li>
          </ul>
        </div>
        <div className="button-container">
          <button className="restart-button">Play Again</button>
          <button className="home-button">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
