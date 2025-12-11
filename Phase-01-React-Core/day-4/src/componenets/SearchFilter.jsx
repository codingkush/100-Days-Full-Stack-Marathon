import React, { useState, useEffect } from "react";

function SearchFilter() {
  const users = ["Kush", "Aarav", "Riya", "Sneha", "Arjun", "Priya"];

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(users);

  useEffect(() => {
    const result = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(result);
  }, [search]); // runs only when search changes

  return (
    <div style={styles.box}>
      <h2>Live Search Filter</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      {/* Conditional Rendering */}
      {filtered.length === 0 ? (
        <p>No results found...</p>
      ) : (
        <ul>
          {filtered.map((user, index) => (
            <li key={index} style={styles.item}>
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  box: {
    padding: "20px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginTop: "20px",
  },
  input: {
    width: "90%",
    padding: "8px",
    marginBottom: "10px",
  },
  item: {
    background: "#f3f3f3",
    padding: "6px",
    borderRadius: "6px",
    marginBottom: "5px",
  },
};

export default SearchFilter;
