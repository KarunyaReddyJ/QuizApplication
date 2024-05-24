/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import useData from "../CustomHook/useData"
function Palette({text,isQuestion,question={},index=-1}) {
  const {setQuestions}=useData()
  const handleClick = () => {
    if (isQuestion){ 
      
      return;}
    setQuestions(prev => {
      return prev.map(p => {
        if (p.question === question.question) {
          return { ...p, choice: index,attempted:true };
        }
        return p;
      });
    });
  };
  return (
    <div className={`
    ${isQuestion?'mx-auto w-4/6 min-w-64 h-20 bg-gray-200 '
    : question['choice']===index?'bg-yellow-200 px-4 py-2 flex flex-col justify-center w-4/6 my-10 h-20':'bg-gray-200 px-4 py-2 flex flex-col justify-center w-4/6 my-10 h-20'}
     text-center shadow-md text-black align-middle rounded-md`} 
     
     onClick={handleClick}
     > 
      {text}
    </div>
  )
}

export default Palette
