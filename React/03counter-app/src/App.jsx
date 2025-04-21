import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(15);

  const add = () => {
    setCount(count + 1);
  }

  const remove = () => {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h1>This is ReactJS Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={add}>Add Value</button>{" "}
      <button onClick={remove}>Remove Value</button>
    </>
  );
}

export default App;
