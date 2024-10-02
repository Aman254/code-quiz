import React from "react";

interface diapatchAction {
  type: string;
}

interface NextButtonPros {
  dispatch: React.Dispatch<diapatchAction>;
  answer: string | null;
  index: number;
  numQuestions: number;
}

export const NextButton: React.FC<NextButtonPros> = ({
  dispatch,
  answer,
  index,
  numQuestions,
}) => {
  console.log(answer);
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};
