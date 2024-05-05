import React, { Component } from 'react';
import questions from "../resources/quizQuestion.json";
import "./QuizComponent.css";

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0
    };
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.max(0, prevState.currentQuestionIndex - 1)
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.min(questions.length - 1, prevState.currentQuestionIndex + 1)
    }));
  };

  handleQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      this.props.onQuitClick(); 
    }
  };

  render() {
    const { currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <h2>Question</h2>
        <p className="question-number">{currentQuestionIndex + 1} of {questions.length}</p>
        <p>{currentQuestion.question}</p>
        <ul className="option-list">
          <li>{currentQuestion.optionA}</li>
          <li>{currentQuestion.optionB}</li>
          <li>{currentQuestion.optionC}</li>
          <li>{currentQuestion.optionD}</li>
        </ul>

        <div className="button-container">
          <button onClick={this.handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
          <button onClick={this.handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
          <button onClick={this.handleQuit}>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
