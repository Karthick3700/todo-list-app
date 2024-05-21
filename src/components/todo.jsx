import Status from "./status";
import TodoInput from "./todoInput";
import TodoItem from "./todoitem";
import React, { Fragment, useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, isChecked: false };
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (deletedTaskName) => {
    setTodoList(todoList.filter((task) => task.taskName !== deletedTaskName));
  };

  const toggleCheck = (taskName) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.taskName === taskName
          ? { ...task, isChecked: !task.isChecked }
          : task
      )
    );
  };
  return (
    <Fragment>
      <div className="container">
        <h1>Task Manager</h1>
        <TodoInput addTask={addTask} />
        <div className="toDoList">
          <span>Your tasks 😉</span>
          <ul className="list-items">
            {todoList.map((task, index) => {
              return (
                <TodoItem
                  task={task}
                  key={index}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                />
              );
            })}
          </ul>
          {todoList.length === 0 ? (
            <p className="notify">You are done..!</p>
          ) : null}
        </div>
      </div>
      <Status todoList={todoList}/>
    </Fragment>
  );
};

export default Todo;
