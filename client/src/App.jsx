import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodos = () => {
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodos}>Add note</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
