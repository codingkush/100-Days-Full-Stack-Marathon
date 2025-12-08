import React, { useState } from "react";

const Alert = ({ type = "success", message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // Conditional rendering

  const styles = {
    success: { backgroundColor: "#d4edda", borderLeft: "5px solid #28a745" },
    error: { backgroundColor: "#f8d7da", borderLeft: "5px solid #dc3545" },
    warning: { backgroundColor: "#fff3cd", borderLeft: "5px solid #ffc107" },
    box: {
      padding: "12px",
      marginBottom: "12px",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <div style={{ ...styles.box, ...styles[type] }}>
      <p>{message}</p>
      <button onClick={() => setVisible(false)}>x</button>
    </div>
  );
}

export default Alert;
