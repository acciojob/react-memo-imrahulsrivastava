import React, { useState } from "react";

const ReactMemoComponent = React.memo(() => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddSkill = () => {
    setSkills([...skills, inputValue.trim()]);
    setInputValue("");
  };

  const handleClearSkill = () => {
    setSkills([]);
    setInputValue("");
  };

  return (
    <section className="react-memo">
      <h2>React.memo</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input"
        placeholder="Enter a skill"
      />
      <button onClick={handleAddSkill} className="button">
        Add Skill
      </button>
      <button onClick={handleClearSkill} className="button">
        Clear
      </button>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
});

export default ReactMemoComponent;
