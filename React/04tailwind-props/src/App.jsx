import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App({chacha = "HC"}) {
  return (
    <>
      <div className="container w-full h-screen">
        <div className="w-full p-3 bg-green-300 text-3xl rounded-md">
          Header Section
        </div>
        <Card year={2024}/>
        <Card chacha={"garden"} />
        <Card />
      </div>
    </>
  );
}

export default App;
