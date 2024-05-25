/* eslint-disable react/prop-types */


function Button({ text, color, fn }) {
  

  return (
    <button
      onClick={fn}
      className={`bg-${color}-700 px-10 py-2 rounded-md active:shadow-sm ${text==='Submit'?'fixed right-20':''} `}
    >
      {text}
    </button>
  );
}

export default Button;
