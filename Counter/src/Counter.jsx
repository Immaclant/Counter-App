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
    <main className="counter-container">
      <div className="counter-text">
        <h2>Active Count</h2>
      </div>
      <div className="counter-value-container">
        <h2 className="counter-value">{counter}</h2>
        <div className="button-container">
          <button className="btn btn-add" onClick={Add}>
            +
          </button>
          <button className="btn btn-reset" onClick={Reset}>
            Reset
          </button>
          <button className="btn btn-subtract" onClick={Subtract}>
            -
          </button>
        </div>
      </div>
    </main>
  );
}

export default Counter;
