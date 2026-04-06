import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function Add() {
    setCounter((prev) => prev + 1);
  }

  function Subtract() {
    setCounter((prev) => prev > 0? prev-1: 0);
  }

  return (
    <main>
      <div>
        <h2>Counter-App</h2>
      </div>
      <div>
        <h2>{counter}</h2>
        <button onClick={Add}>+</button>
        <button onClick={Subtract}>-</button>
      </div>
    </main>
  );
}

export default Counter;
