import React, { useState } from "react";
import Alert from "./Alert";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, todo]); // Add item to list
    setTodo("");
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>

      {showSuccess && <Alert type="success" message="Todo added successfully!" />}

      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={styles.input}
      />

      <button onClick={addTodo} style={styles.button}>Add Todo</button>

      {/* Conditional Rendering */}
      {todos.length === 0 ? (
        <p>No todos yet...</p>
      ) : (
        <ul>
          {todos.map((item, index) => (
            <li key={index} style={styles.todoItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
    width: "350px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  input: {
    width: "90%",
    padding: "8px",
    margin: "10px 0px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  todoItem: {
    backgroundColor: "#f3f3f3",
    padding: "6px",
    margin: "5px 0",
    borderRadius: "6px",
  },
};

export default TodoList;
