import React, {useState} from "react";
import "./Card.css";

const Card = ({question, answer}) =>{
    return(
        <div className="container">
            <div className="card">
                <div className = "front">{question}</div>
                <div className = "back">{answer}</div>
            </div>
        </div>
    );
};

export default Card;