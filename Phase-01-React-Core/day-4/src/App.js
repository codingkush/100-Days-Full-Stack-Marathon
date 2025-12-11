import React from "react";
import DigitalClock from "./componenets/DigitalClock";
import SearchFilter from "./componenets/SearchFilter";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 4 – useEffect</h1>

      <DigitalClock />
      <SearchFilter />
    </div>
  );
}

export default App;
