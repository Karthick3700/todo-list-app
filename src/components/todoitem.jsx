import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const TodoItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={() => {
            toggleCheck(task.taskName);
          }}
        />
        <p className={task.isChecked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => {
          deleteTask(task.taskName);
        }}
      />
    </li>
  );
};

export default TodoItem;
