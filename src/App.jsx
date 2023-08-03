import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };
  const onDecrement = () => {
    if (count <= 10 && count > 0) setCount((prev) => prev - 1);
  };
  return (
    <>
      <Counter
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </>
  );
}

export default App;
