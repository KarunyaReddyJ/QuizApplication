/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import QuestionContext from "./ContextCreator";
import axios from "axios";

function ContextProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNo, setQuestionNo] = useState(0);
  const [End, setEnd] = useState(false);
  const url =
    "https://opentdb.com/api.php?amount=10&&type=multiple&&category=32";
  useEffect(() => {
    axios(url)
      .then((response) => {
        setQuestions(
          response.data.results.map((q) => {
            return { ...q, attempted: false, choice: -1,correct:false };
          })
        );
        setQuestionNo(0)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [End]);

  const Submit = () => {
    const response=confirm('Are you sure you want to end?')
    if(response)
        setEnd(true)
  };
  console.log('score',score)
  const back = () => {
    if (questionNo === 0) {
      alert("First Question");
      return;
    }
    setTimeout(() => {
      setQuestionNo((p) => p - 1);
    }, 150);
  };
  const front = () => {
    if (questionNo === questions.length - 1) {
      alert("Last Question");
      return;
    }
    setTimeout(() => {
      setQuestionNo((p) => p + 1);
    }, 150);
  };

  return (
    <QuestionContext.Provider
      value={{
        score,
        setScore,
        questions,
        setQuestions,
        questionNo,
        setQuestionNo,
        back,
        front,
        Submit,
        End,
        setEnd
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export default ContextProvider;
