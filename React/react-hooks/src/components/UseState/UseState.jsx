import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const btnClicked = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={btnClicked}>Increase</button>
    </div>
  );
}

export default UseState;
