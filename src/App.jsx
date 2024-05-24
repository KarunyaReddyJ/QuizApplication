import './App.css'
import QuestionBox from './components/QuestionBox'
import SideBar from './components/SideBar'
import ContextProvider from './context/ContextProvider'

function App() {
  
  return (
    <ContextProvider>
      <div className='flex flex-row'>
     <QuestionBox/>
     <SideBar/>
     </div>
    </ContextProvider>
  )
}

export default App
