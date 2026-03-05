import { useState, useEffect } from "react";
import "./QuizCard.css";

function QuizCard() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/src/data/test.json')
      .then(response => response.json())
      .then(data => setData(data.name))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="m-3 p-3 bg-white rounded-xl">
      <div className="mb-2 ">
        <h2 className="text-sm underline decoration-1">Question #1</h2>
        <h1 className="text-xl font-bold text-blue-700">?????</h1>
        <p>
          {data}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <button className="choiceButton">A</button>
        <button className="choiceButton">B</button>
        <button className="choiceButton">C</button>
        <button className="choiceButton">D</button>
      </div>
    </div>
  );
}

export default QuizCard;
