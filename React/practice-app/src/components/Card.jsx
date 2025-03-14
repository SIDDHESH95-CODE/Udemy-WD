import React from "react";

const Card = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-300">
      <div className="card w-54 absolute bg-zinc-100 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md overflow-hidden">
        <div className="img w-full h-34 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="w-full h-full object-cover"
          />
        </div>
        <div className="content px-5 py-4">
          <h1 className="text-2xl font-semibold">Heading</h1>
          <p className="text-sm mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iste
            ad tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
