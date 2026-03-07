import { useState } from "react";

import "./QuizCard.css";

interface QuizChoiceProps {
  keyId: number;
  index: number;
  text: string;
  isChosen: boolean;
  correctIndex: number;
  chosenIndex: number;
  onClickCall: (index: number) => void;
}

function QuizChoiceButton({
  keyId,
  index,
  text,
  isChosen,
  correctIndex,
  chosenIndex,
  onClickCall,
}: QuizChoiceProps) {
  if (isChosen) {
    if (correctIndex == chosenIndex) {
      if (correctIndex == index) {
        return (
          <button
            key={keyId}
            className="choiceButton-correct"
            onClick={() => onClickCall(index)}
          >
            {text}
          </button>
        );
      } else {
        return (
          <button
            key={keyId}
            className="choiceButton-disabled"
            onClick={() => onClickCall(index)}
          >
            {text}
          </button>
        );
      }
    } else {
      if (correctIndex == index) {
        return (
          <button
            key={keyId}
            className="choiceButton-correct"
            onClick={() => onClickCall(index)}
          >
            {text}
          </button>
        );
      } else if (chosenIndex == index) {
        return (
          <button
            key={keyId}
            className="choiceButton-incorrect"
            onClick={() => onClickCall(index)}
          >
            {text}
          </button>
        );
      } else {
        return (
          <button
            key={keyId}
            className="choiceButton-disabled"
            onClick={() => onClickCall(index)}
          >
            {text}
          </button>
        );
      }
    }
  } else {
    return (
      <button
        key={keyId}
        className="choiceButton"
        onClick={() => onClickCall(index)}
      >
        {text}
      </button>
    );
  }
}

export default QuizChoiceButton;
