import React, { useState } from "react";
import styles from "./SnacksCounter.module.css";

const SnacksCounter = ({ min = 0, max = 5, inc = 1, setValue, value }) => {
  const [input, setInput] = useState(String(min));
  const isMin = value === min;
  const isMax = value === max;

  function prev() {
    setValue((value) => Math.max(min, value - inc));
  }

  function next() {
    setValue((prev) => Math.min(max, prev + inc));
  }

  function jump() {
    let n = +input;
    const clamped = Math.min(max, Math.max(min, n));
    setValue(() => clamped);
  }

  function reset() {
    setValue(min);
  }
  return (
    <div className={styles.card}>
      <h2 style={{textAlign: "center"}}>Add Snacks</h2>
      <div className="stepper-value">{value}</div>
      <button
        className="stepper-btn"
        onClick={prev}
        disabled={isMin ? true : false}
      >
        Remove
      </button>
      
      <button
        className="stepper-btn"
        onClick={next}
        disabled={isMax ? true : false}
      >
        Add
      </button>
      <div className="stepper-fields">
        <input
          type="number"
          className="stepper-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          min={min}
          max={max}
        />
        <button className="stepper-btn" onClick={jump}>
          BULK
        </button>
        <button className="stepper-btn" onClick={reset}>
          Empty
        </button>
      </div>
    </div>
  );
};

export default SnacksCounter;
