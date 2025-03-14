import React from "react";

const Names = () => {
  const data = ["Suresh", "Ramesh", "John", "Kathriene"];

  return (
    <div className="w-full min-h-screen bg-zinc-300 p-5">
      {data.map((item, index) => (
        <h1 className="px-3 py-2 bg-pink-300 w-fit m-3" key={index}>
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Names;
