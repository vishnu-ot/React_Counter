import React from "react";
import "./Counter.css";
export function Counter({ onIncrement, onDecrement, count }) {
  return (
    <div className="counter-container">
      <h1>Counter :{count}</h1>
      <div className="btn-grps">
        <button onClick={onIncrement} disabled={count === 10}>
          Increment
        </button>
        <button onClick={onDecrement} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </div>
  );
}
