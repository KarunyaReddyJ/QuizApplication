import { useContext } from 'react'
import QuestionContext from '../context/ContextCreator'
export default function useData() {
  return useContext(QuestionContext)
}


