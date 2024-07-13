import React from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main" className="app">
      <h1>React.useMemo</h1>
      <UseMemoComponent />
      <ReactMemoComponent />
    </div>
  );
};

export default App;
