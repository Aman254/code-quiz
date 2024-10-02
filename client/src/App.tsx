import Error from "./Components/Error";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Main from "./Components/Main";
import { useEffect, useReducer } from "react";
import { StartScreen } from "./Components/StartScreen";
import { Question } from "./Components/Question";
import { NextButton } from "./Components/NextButton";

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  status: "loading",
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    case "newAnswer": {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    }

    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [{ index, questions, status, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  //
  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err: unknown) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />{" "}
      <Main className="main">
        {status === "loading" && <Loader />}
        {status === " error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}
