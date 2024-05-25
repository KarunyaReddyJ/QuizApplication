/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import useData from "../CustomHook/useData";
function Palette({ text, isQuestion, question = {}, index = -1 }) {
  const { setQuestions, questionNo, setScore, questions } = useData();
  const handleClick = (e) => {
    if (isQuestion) return;
    setQuestions((prev) => {
      return prev.map((p) => {
        if (p.question === question.question) {
          if (question["choice"] === index) {
            changeSCore(e, "-");
            return { ...p, choice: null, attempted: false };
          }
          else if(question['attempted'] && question['correct']){
            changeSCore(e, "-");
            return { ...p, choice: index, attempted: true };
          }
          changeSCore(e, "+");
          return { ...p, choice: index, attempted: true };
        } 
        return p;
      });
    });
  };

  function changeSCore(e, oper) {
    if (e.target.innerText.trim() === questions[questionNo]["correct_answer"].trim()) {
      question['correct']=true;
      setScore((score) => {
        console.log(
          eval(`${score}${oper}${4}`)
        );
        if (questions[questionNo]["difficulty"] === "easy")
          return eval(`${score}${oper}${1}`);
        else if (questions[questionNo]["difficulty"] === "medium")
          return eval(`${score}${oper}${2}`);
        else return eval(`${score}${oper}${4}`);
      });
    }
    else{
      question['correct']=false;
    }
  }
  return (
    <div
      className={`
    ${
      isQuestion
        ? "mx-auto w-4/6 min-w-64 h-20 bg-gray-300 flex flex-col justify-center"
        : question["choice"] === index
        ? "bg-yellow-200 px-4 py-2 flex flex-col justify-center w-4/6 my-10 h-20"
        : "bg-gray-200 px-4 py-2 flex flex-col justify-center w-4/6 my-10 h-20 hover:bg-gray-400 cursor-pointer"
    }
     text-center shadow-xl text-black align-middle rounded-md`}
      onClick={handleClick}
    >
      {isQuestion && questionNo + 1 + "."}
      {text}
    </div>
  );
}

export default Palette;
