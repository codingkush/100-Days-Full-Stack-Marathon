import React from "react";
import Counter from "./components/Counter";
import MessagePreview from "./components/MessagePreview";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 2 – useState & Events</h1>

      <Counter />
      <MessagePreview />
    </div>
  );
}

export default App;
