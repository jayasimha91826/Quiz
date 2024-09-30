import React from 'react';
import './Modal.css';

const Modal = ({ score, onRetry, onNextTopic }) => {
  return (
    <div className='mainContainer'>
      {score > 8 ? (
        <div>
          <h1>You Won!</h1>
          <p>Your Score: {score}/10</p>
          <button className='start' onClick={onNextTopic}>Next Topic</button>
        </div>
      ) : (
        <div>
          <h1>You Lost!</h1>
          <p>Your Score: {score}/10</p>
          <button className='start' onClick={onRetry}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
