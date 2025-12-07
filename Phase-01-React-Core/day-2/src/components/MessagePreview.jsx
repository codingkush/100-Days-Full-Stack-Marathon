import React, { useState } from "react";

function MessagePreview() {
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <h3>Live Message Preview</h3>

      <input 
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />

      <p style={styles.preview}>
        {text.length > 0 ? text : "Type something..."}
      </p>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
  },
  preview: {
    fontSize: "16px",
    color: "#555",
  },
};

export default MessagePreview;
