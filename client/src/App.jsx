import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [keys, setKeys] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setKeys(Object.keys(data));
        setTodos(data);
      })
      .catch((error) => console.error("Something went wrong: ", error));
  }, []);

  // console.log(keys);

  const handleAddTodo = () => {
    if (text.trim() === "") {
      setErr("Todo content cannot be empty.");
      return;
    }

    let newItem = {
      id: keys.length + 1,
      content: text.trim()
    }

    fetch("http://127.0.0.1:8000/add/", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newItem)})
      .then((response) => response.json())
      .then((data) => {
        setErr("");
        setKeys(Object.keys(data));
        setTodos(data);
      })
      .catch((error) => console.error("Something went wrong: ", error));

    setText("");
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSaveEdit = (index) => {
    if (editText.trim() === "") {
      setErr("Todo content cannot be empty.");
      return;
    }

    let editItem = {
      id: index,
      content: editText.trim()
    }

    fetch("http://127.0.0.1:8000/edit/", { method: "PUT", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(editItem)})
    .then((response) => response.json())
    .then((data) => {
      setErr("");
      setTodos(data);
    })
    .catch((error) => console.error("Something went wrong: ", error));

    setEditIndex(null);
    setEditText("");
  };

  const handleDeleteTodo = (index) => {
    fetch("http://127.0.0.1:8000/delete/", { method: "DELETE", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(index)})
    .then((response) => response.json())
    .then((data) => {
      setKeys(Object.keys(data));
      setTodos(data);
    })
    .catch((error) => console.error("Something went wrong: ", error));
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
      {err && <div className="error">{err}</div>}
      <ul>
        {keys.map( index => (
          <li key={index}>
            {editIndex === index ? (
              <div className="todo-container">
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
                <span className="todo-item">{todos[index]}</span>
                <div>
                  <button onClick={() => handleEditTodo(index)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    <i className="fa-regular fa-trash-can"></i>
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
