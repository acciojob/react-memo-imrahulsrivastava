import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const calculatedValue = useMemo(() => expensiveCalculation(0), []);

  return (
    <div>
      <section className="todo-section">
        <h2>My todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo" id={`todo-${index}`}>
              {todo}
            </li>
          ))}
        </ul>
        <button id="add-todo-btn" onClick={handleAddTodo} className="button">
          Add Todo
        </button>
      </section>

      <section className="counter-section">
        <h2>Count: {counter}</h2>
        <button
          id="incr-btn incr-cnt"
          onClick={handleIncrement}
          className="button"
        >
          0
        </button>
      </section>

      <section id="calc">
        <h2>Expensive Calculation</h2>
        <p>{calculatedValue}</p>
      </section>
    </div>
  );
};

export default UseMemoComponent;
