import { useState } from 'react'
import './App.css'
import Card from "./components/Card";
import CardChange from "./components/CardChange";
import cardData from "./components/Q&A";

function App() {
  const [currentCard, setCurrentCard] = useState(0);

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
        <Card question = {cardData[currentCard].question} answer = {cardData[currentCard].answer}/>
        <CardChange cardData ={cardData} numchange={ChangeCard}/>
      </div>
    </div>
      
  );
}

export default App
