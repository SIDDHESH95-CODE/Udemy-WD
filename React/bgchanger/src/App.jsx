import React, { useState } from "react";

function App() {
  const colorData = ["red", "green", "blue", "olive", "pink", "teal", "black"];

  const [color, setColor] = useState("wheat");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="w-full min-h-screen" style={{backgroundColor: color}}>
      <div className="px-3 py-2 bg-zinc-100 w-fit rounded-full absolute bottom-1/8 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center gap-4">
        {colorData.map((color, index) => (
          <button className="shadow-2xl cursor-pointer px-5 py-3 rounded-full text-white font-semibold"  key={index} style={{backgroundColor: color}}
          onClick={() => changeColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
