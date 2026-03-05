import { useState, useEffect } from "react";
import { type Question } from "./types/Question";

import QuizCard from "./comps/QuizCard";

import "./App.css";

function App() {
  // data is either Question or Null
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch("/src/data/test.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {questions.map((q: Question, i) => (
        <QuizCard key={i} question={q} i={i + 1}></QuizCard>
      ))}
    </div>
  );
}

export default App;
