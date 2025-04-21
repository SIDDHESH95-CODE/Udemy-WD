import React from "react";

function Card({year, chacha}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl bg-zinc-500">
      <div>
        <img
          class="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div class="flex">
        <span class="text-2xl font-medium">Class {chacha}</span>
        <span class="font-medium text-sky-500">The Anti-Patterns</span>
        <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>{year}</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
