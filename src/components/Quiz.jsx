import React, { useEffect, useState } from "react";
import questions from "./questions.js";
import Modal from "./Modal.jsx";
import "./Quiz.css";

const Quiz = ({ category1, difficulty1, onNextTopic }) => {
  const [category] = useState(category1);
  const [difficulty] = useState(difficulty1);
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);
  const [defaultClass, setDefaultClass] = useState(null);

  const currentQuestion = question[currentIndex];

  useEffect(() => {
    const filteredQuestions = questions.filter(
      (q) => q.category === category && q.difficulty === difficulty
    );
    setQuestion(filteredQuestions);
  }, [category, difficulty]);

  const handleNextQuestion = () => {
    if (currentIndex < question.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setDefaultClass(null); // Reset class for the next question
    } else {
      setModal(true); // Show modal when no more questions
    }
  };

  const handleAnswer = (item) => {
    setDefaultClass(item === currentQuestion.answer ? "trueOptions" : "falseOption");
    setScore(item === currentQuestion.answer ? score + 1 : score);
  };

  const handleRetry = () => {
    setModal(false); // Hide modal
    setCurrentIndex(0); // Reset to the first question
    setScore(0); // Reset score
    setDefaultClass(null); // Reset classes
  };

  if (!currentQuestion) return <p>Please select a Category and Difficulty.</p>;

  return (
    <div>
      <p className="question">{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, idx) => (
          <li
            key={idx}
            onClick={() => handleAnswer(option)}
            className={defaultClass ? (option === currentQuestion.answer ? "trueOptions" : "falseOption") : "default"}
          >
            {option}
          </li>
        ))}
      </ul>
      <button className="next" onClick={handleNextQuestion}>Next</button>
      <p className="score">Your Score : {score}</p>
      {modal && <Modal score={score} onRetry={handleRetry} onNextTopic={onNextTopic} />}
    </div>
  );
};

export default Quiz;
