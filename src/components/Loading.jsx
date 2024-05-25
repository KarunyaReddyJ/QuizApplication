import { useEffect, useState } from "react";

function LoadingSpinner() {
  const [warn, setwarn] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setwarn("Taking a while...");
    }, 1000);
  }, []);
  return (
    <>
      <p> {warn} </p>
      <div className=" m-auto flex items-center justify-center h-screen">
        <div className="m-auto animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    </>
  );
}

export default LoadingSpinner;
