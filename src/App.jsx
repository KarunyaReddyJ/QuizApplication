
import Result  from './components/Result'
import QuestionBox from './components/QuestionBox'
import SideBar from './components/SideBar'
import useData from './CustomHook/useData'

function App() {
  const {End,score}=useData()
  return (
    
      <div className='flex flex-row relative'>
    {
      End? <Result/>
      :
      <>
      <QuestionBox/>
      <SideBar/></>

    }
     </div>
    
  )
}

export default App
