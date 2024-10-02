import React from "react";

interface dispatchAction {
  type: string;
}

interface FinishScreenProps {
  points: number;
  highScore: number;
  maxPossiblePoints: number;
  dispatch: React.Dispatch<dispatchAction>;
}

export const FinishScreen: React.FC<FinishScreenProps> = ({
  points,
  maxPossiblePoints,
  dispatch,
  highScore,
}) => {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};
