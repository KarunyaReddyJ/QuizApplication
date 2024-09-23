import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import SideBar from './components/SideBar';
import useData from './CustomHook/useData';

function App() {
  const { End } = useData();

  return (
    <div className="flex flex-row min-h-screen relative">
      {
        End ? (
         
          <div className="flex items-center justify-center w-full">
            <Result />
          </div>
        ) : (
          <div className="flex flex-row w-full">

            <div className="w-3/4 p-4">
              <QuestionBox />
            </div>

           
            <div className="w-1/4 bg-gray-100 p-4">
              <SideBar />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
