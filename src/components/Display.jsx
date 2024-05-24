
import useData from '../CustomHook/useData'
function Display() {
    const { questions }=useData()
  return (
    <div>
      {
        questions.map((question)=>{
            return (<p key={question.correct_answer} >{question.question}</p>  )
})
      }
    </div>
  )
}

export default Display
