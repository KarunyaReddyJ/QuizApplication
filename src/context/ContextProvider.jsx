/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import QuestionContext from './ContextCreator';
import axios from 'axios';

function ContextProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNo, setQuestionNo] = useState(0);
  const url='https://opentdb.com/api.php?amount=10&&type=multiple&&category=32'
  useEffect(() => {
    axios(url)
      .then(response => {
        setQuestions(
          response.data.results.map(q=>{
            console.log('again')
          return {...q,attempted:false,choice:-1}
        }));
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const answerResponse=(e)=>{
    if( questions.length && e.target.value===correct)
        setScore(p=>{
            if(questions[questionNo]['difficulty']==='easy')
                return p+1
            else if(questions[questionNo]['difficulty']==='medium')
                return p+2
            else
                return p+4
            }
        )
}
const back=()=>{
    if(questionNo===0){
        alert('First Question')
        return
    }
    setTimeout(() => {
      setQuestionNo(p=>p-1)
    }, 150);}
const front=()=>{
    if(questionNo===questions.length-1){
        alert('Last Question')
        return
    }
    setTimeout(() => {
      setQuestionNo(p=>p+1)
    }, 0);
    }

  return (
    <QuestionContext.Provider value={{ score, setScore, questions, setQuestions,questionNo,setQuestionNo,back,front,answerResponse }}>
      {children}
    </QuestionContext.Provider>
  );
}

export default ContextProvider;
