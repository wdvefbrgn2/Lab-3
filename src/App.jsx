import { useEffect, useState } from 'react'
import './App.css'
import Card from "./components/Card";
import CardChange from "./components/CardChange";
import cardData from "./components/Q&A";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isCorrect, setIsCorrect] = useState('');
  const ChangeCard = (newcardnum) => {
    setCurrentCard(newcardnum);
  };

  return (
    <div className = "main">
      <div className = "title">
        <h1> Fun History Trivia!</h1>
        <p> Test out your knowledge of random history using the following cards!</p>
      </div>
      <div className = "card">
        <Card isCorrect = {isCorrect} setIsCorrect = {setIsCorrect} question = {cardData[currentCard].question} answer = {cardData[currentCard].answer}/>
        <CardChange isCorrect = {isCorrect} setIsCorrect = {setIsCorrect} cardData ={cardData} numchange={ChangeCard}/>
        <div>
          {isCorrect}
        </div>
      </div>
    </div>
      
  );
}

export default App
