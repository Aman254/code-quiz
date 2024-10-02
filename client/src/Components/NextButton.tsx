import React from "react";

interface diapatchAction {
  type: string;
}

interface NextButtonPros {
  dispatch: React.Dispatch<diapatchAction>;
  answer: string | null;
}

export const NextButton: React.FC<NextButtonPros> = ({ dispatch, answer }) => {
  console.log(answer);
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};
