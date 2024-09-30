import React, { useState } from "react";
import "./main.css";
import Quiz from "./Quiz";

const Main = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [started, setStarted] = useState(false);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleStarted = () => {
    if (category && difficulty) {
      setStarted(true);
    } else {
      alert("Please select both Category and Difficulty to start the quiz");
    }
  };

  const handleNextTopic = () => {
    setStarted(false);
    setCategory(""); 
    setDifficulty("");
  };

  return (
    <div className="labelcontainer">
      {!started ? (
        <div>
          <label for="category">Select category</label>
          <select onChange={handleCategory} name="category" id="category" value={category}>
            <option value="" disabled>Select a Topic</option>
            <option value="Category 1">Topic1</option>
            <option value="Category 2">Topic2</option>
            <option value="Category 3">Topic3</option>
          </select>
          <br />
          <label for="difficulty">Select Difficulty</label>
          <select onChange={handleDifficulty} name="difficulty" id="difficulty" value={difficulty}>
            <option value="" disabled>Select a Level</option>
            <option value="easy">Level1</option>
            <option value="medium">Level2</option>
            <option value="hard">Level3</option>
          </select>
          <br />
          <button className="start" onClick={handleStarted}>
            Start
          </button>
        </div>
      ) : (
        <Quiz category1={category} difficulty1={difficulty} onNextTopic={handleNextTopic} />
      )}
    </div>
  );
};

export default Main;
