import React from "react";

interface StartAction {
  type: "start";
}

interface StartScreenProps {
  numQuestions: number;
  dispatch: React.Dispatch<StartAction>;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  numQuestions,
  dispatch,
}) => {
  return (
    <div className="start">
      <h2>Welocome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};
