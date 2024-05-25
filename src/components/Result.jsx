
import useData from '../CustomHook/useData'
import Button from './Button'
function Result() {
    const {score,setEnd}=useData()
  return (
    <div className='text-black' >
      Your Score: {score} 
      <Button 
        fn={()=>setEnd(false)}
        color={'red'}
        text={'Restart'}
      />
    </div>
  )
}

export default Result
