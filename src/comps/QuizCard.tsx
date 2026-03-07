import { useState, useEffect } from "react";
import { type Question } from "../types/Question";

import "./QuizCard.css";

import QuizChoiceButton from "./QuizChoiceButton";

interface QuizCardProp {
  question: Question;
  i: number;
}

function QuizCard({ question, i }: QuizCardProp) {
  const [isChosen, setChosen] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(-1);

  const onChoose = (choiceIndex: number) => {
    if (!isChosen) {
      if (choiceIndex == question.answer) {
        console.log("yay", choiceIndex);
      } else {
        console.log("NOOO", choiceIndex);
      }
      setChosen(true);
      setSelectedChoice(choiceIndex);
    }
  };

  return (
    <div className="m-3 p-3 bg-white rounded-xl">
      <div className="mb-2 ">
        <h2 className="text-sm underline decoration-1">Question: #{i}</h2>
        <h1 className="text-xl font-bold text-blue-700">{question.title}</h1>
        <p></p>
      </div>
      {/* choice buttons */}
      <div className="grid grid-cols-2">
        {question.choices.map((c, j) => (
          <QuizChoiceButton
            key={j}
            keyId={j}
            index={j}
            text={c}
            isChosen={isChosen}
            correctIndex={question.answer}
            chosenIndex={selectedChoice}
            onClickCall={onChoose}
          />
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
