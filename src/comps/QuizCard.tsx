import { useState, useEffect } from "react";
import { type Question } from "../types/Question";

import "./QuizCard.css";

interface QuizCardProp {
  question: Question;
  i: number;
}

function QuizCard({ question, i }: QuizCardProp) {
  const onChoose = (choiceIndex: number) => {
    if (choiceIndex == question.answer) {
      console.log("yay", choiceIndex);
    } else {
      console.log("NOOO", choiceIndex);
    }
  };

  return (
    <div className="m-3 p-3 bg-white rounded-xl">
      <div className="mb-2 ">
        <h2 className="text-sm underline decoration-1">Question: #{i}</h2>
        <h1 className="text-xl font-bold text-blue-700">{question.title}</h1>
        <p></p>
      </div>
      <div className="grid grid-cols-2">
        {question.choices.map((c, j) => (
          <button key={j} className="choiceButton" onClick={() => onChoose(j)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
