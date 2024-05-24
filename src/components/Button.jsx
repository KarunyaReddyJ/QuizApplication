/* eslint-disable react/prop-types */
import useData from "../CustomHook/useData"

function Button({text,color,fn,correct}) {
    const {questions,questionNo, setQuestionNo,back,front,answerResponse}=useData()
    
  return (
    <button onClick={fn} className={`bg-${color}-700 px-10 py-2 rounded-md active:shadow-sm`} >
      {text}
    </button>
  )
}

export default Button
