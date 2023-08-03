import React from "react";

export function Counter({ onIncrement, onDecrement, count }) {
  return (
    <div>
      <h1>Counter :{count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}
