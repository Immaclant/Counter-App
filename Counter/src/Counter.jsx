import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function Add() {
    setCounter((prev) => prev + 1);
  }

  function Subtract() {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  } // everything is good here

  function Reset() {
    setCounter(0);
  }

  // no need for prev = 0 you can just setCounter(0) it will set state to have 0 value
  // plus you don't need to know previous value of state in order to make it zero

  return (
    <main>
      <div>
        <h2>Counter-App</h2>
      </div>
      <div>
        <h2>{counter}</h2>
        <button onClick={Add}>+</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Subtract}>-</button>
      </div>
    </main>
  );
}

export default Counter;
