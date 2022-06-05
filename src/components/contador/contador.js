import React, { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const decrement = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>decrementar</button>
    </div>
  );
}
