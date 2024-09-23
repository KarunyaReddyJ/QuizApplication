import useData from '../CustomHook/useData';
import Button from './Button';

function Result() {
  const { score, setEnd } = useData();

  return (
    <div className="text-black w-6/12 flex flex-col items-center justify-center h-screen bg-gray-50">
    
      <div className="bg-white shadow-lg rounded-lg p-8 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Quiz Completed!</h2>
        <p className="text-xl text-gray-700">Your Score:</p>
        <p className="text-4xl font-bold text-green-500">{score}</p>
      </div>

     
      <div className="mt-8">
        <Button
          fn={() => setEnd(false)}
          color={'red'}
          text={'Restart'}
          className="transition transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default Result;
