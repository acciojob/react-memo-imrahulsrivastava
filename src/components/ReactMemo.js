import React, { useState } from "react";

const ReactMemoComponent = React.memo(() => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddSkill = () => {
    if (inputValue.length > 5) {
      setSkills([...skills, inputValue]);
      setInputValue("");
    }
  };

  return (
    <section className="react-memo">
      <h2>React.memo</h2>
      <input
        id="skill-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input"
        placeholder="Enter a skill"
      />
      <button id="add-skill-btn" onClick={handleAddSkill} className="button">
        Add Skill
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
