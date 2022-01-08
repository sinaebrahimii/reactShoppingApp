import React, { useState } from "react";
const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return count + 1;
      });
    }
  };
  const addTwoHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return count + 2;
      });
    }
  };
  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return count + 2;
      });
    }
  };
  return (
    <div>
      <h2>Counter{count}</h2>
      <button onClick={addOneHandler}>add one</button>
      <button onClick={addTwoHandler}>add TWO</button>
      <button onClick={addFiveHandler}>add Five</button>
    </div>
  );
};

export default HookCounter;
