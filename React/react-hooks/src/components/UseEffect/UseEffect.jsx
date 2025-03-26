import React, { useEffect, useState } from "react";

function UseEffect() {
  const [value, setValue] = useState(0);

  const startTimer = () => {
    useEffect(() => {
      setTimeout(() => {
        setValue(prev => prev + 1);
      }, 2000);
    });
  };

  return (
    <div>
      <h1>Timer: {value} </h1>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}

export default UseEffect;
