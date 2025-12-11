import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.clockBox}>
      <h2>Current Time</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

const styles = {
  clockBox: {
    padding: "20px",
    width: "250px",
    margin: "20px auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default DigitalClock;
