import React from "react";
import { Question } from "./Question";

interface Props {
  question: Question;
}

const QuestionItem = ({ question }: Props) => {
  return (
    <div>
      <h1>{question.category}</h1>
        <h6>{question.difficulty}</h6>
        <p>{question.question}</p>
        <form>
          <button>True</button>
          <button>False</button>
        </form>
    </div>
  );
};

export default QuestionItem;
