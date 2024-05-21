import React, { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  function handleAddTask(event) {
    event.preventDefault();
    const trimmedTask = task.trim();
    if (trimmedTask !== "") {
      addTask(task);
      setTask(" ");
    }
  }

  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Add items"
        onChange={handleOnChange}
      />
      <button>+</button>
    </form>
  );
};

export default TodoInput;
