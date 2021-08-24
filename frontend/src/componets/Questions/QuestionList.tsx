import React, { useEffect, useState } from "react";
import { Question } from "./Question";
import * as questionService from "./QuestionService";
import QuestionItem from "./QuestionItem";

const QuestionList = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const loadQuestion = async () => {
    const res = await questionService.getQuestion();
    setQuestions(res.data.results);
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  return (
    <div>
      <div id="stepper1" className="bs-stepper">
        <div className="bs-stepper-header">
          <div className="step" data-target="#test-l-1">
            <button className="step-trigger">
              <span className="bs-stepper-circle">1</span>
            </button>
          </div>
        </div>
        

        


      </div>
      

      {questions.map((question) => {
        return <QuestionItem question={question} key={question.question} />;
      })}
    </div>
  );
};

export default QuestionList;
