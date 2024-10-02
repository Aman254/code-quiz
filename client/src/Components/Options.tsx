import React from "react";

interface dispatchAction {
  type: string;
  payload: number;
}

interface OptionProps {
  question: {
    id: string;
    question: string;
    correctOption: number;
    points: number;
    options: string[];
  };
  dispatch: React.Dispatch<dispatchAction>;
  answer: string | number | null;
}

export const Options: React.FC<OptionProps> = ({
  question,
  dispatch,
  answer,
}) => {
  //
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
