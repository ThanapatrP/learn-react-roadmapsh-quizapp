import "./QuizCard.css";

function QuizCard() {
  return (
    <div className="m-3 p-3 bg-white rounded-xl">
      <div className="mb-2 ">
        <h2 className="text-sm underline decoration-1">Question #1</h2>
        <h1 className="text-xl font-bold text-blue-700">?????</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa
          dolorum vero iusto non nulla praesentium odit voluptates. At repellat
          facilis aliquid aspernatur incidunt ipsa obcaecati commodi laborum
          enim eum?
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
