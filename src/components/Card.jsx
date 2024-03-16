import React, { useState } from "react";
import cardData from "./Q&A";
import "./Card.css";

const Card = ({ isCorrect, setIsCorrect, question, answer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    cardData.forEach((item) => {
      if (item.question == question) {
        if (userAnswer == item.answer) {
          setIsCorrect("right");
        } else {
          setIsCorrect("wrong");
        }
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="front">{question}</div>
          <div className="back">{answer}</div>
        </div>
      </div>
      <div className="submit">
        <form onSubmit={handleAnswerSubmit}>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
