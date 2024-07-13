import React, { useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemoComponent = ({ todos }) => {
  const calculatedValue = useMemo(() => expensiveCalculation(0), []);

  return (
    <section className="use-memo">
      <h2>Expensive Calculation</h2>
      <p>{calculatedValue}</p>
    </section>
  );
};

export default UseMemoComponent;
