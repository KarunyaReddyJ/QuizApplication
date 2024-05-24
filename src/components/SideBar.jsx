import useData from "../CustomHook/useData"
function SideBar() {
     const {questions}=useData()
    if(!questions)
        return <h2>Preparing</h2>
  return (
    <div className="text-black grid-cols-2 grid w-1/4  absolute right-0">
      {
        questions.map((question,index)=>{
             return (<div key={index} className={`${question['attempted']?'bg-green-700':'bg-gray-100'} w-16 h-16 rounded-full my-2 text-center flex flex-col justify-center `} > {index+1} </div>)
        })
      }
    </div>
  )
}

export default SideBar
