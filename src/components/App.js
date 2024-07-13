import React, { useState } from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";
import "../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="app">
      <h1>React.useMemo</h1>
      <section className="todo-section">
        <h2>My todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <button onClick={handleAddTodo} className="button">
          Add Todo
        </button>
      </section>

      <section className="counter-section">
        <h2>Count: {counter}</h2>
        <button onClick={handleIncrement} className="button">
          +
        </button>
        <button onClick={handleDecrement} className="button">
          -
        </button>
      </section>

      <UseMemoComponent todos={todos} />

      <ReactMemoComponent />
    </div>
  );
};

export default App;
