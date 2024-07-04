import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => console.log("yay: ", data.data))
      .catch((error) => console.error("Something went wrong: ", error));
  }, []);

  const handleAddTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editText : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div>
        <h1>To-do List</h1>
        <input
          type="text"
          value={text}
          maxLength={25}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add note</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  maxLength={25}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </div>
            ) : (
              <div className="todo-container">
                <span className="todo-item">{todo}</span>
                <div>
                  <button onClick={() => handleEditTodo(index)}>Edit</button>
                  <button
                    className="delete"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
