import React from "react";
import { Options } from "./Options";

interface dispatchAction {
  type: string;
}

interface QuestionProps {
  question: {
    id: string;
    question: string;
    correctOption: number;
    points: number;
    options: string[];
  };

  dispatch: React.Dispatch<dispatchAction>;

  answer: null | number | string;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  dispatch,
  answer,
}) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};
