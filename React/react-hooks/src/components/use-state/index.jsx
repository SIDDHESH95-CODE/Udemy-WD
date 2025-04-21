import { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);

  const changeBtn = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      {/* Method 1: */}
      {/* <button onClick={() => setCount(prev => prev + 1)}>Change</button> */}

      {/* // Method 2: */}
      <button onClick={changeBtn}>Change</button>
    </>
  );
};
