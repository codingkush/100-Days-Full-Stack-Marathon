import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>

      <div style={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    marginTop: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default Counter;
