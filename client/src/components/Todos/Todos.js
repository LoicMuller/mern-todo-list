import React from "react";
import "./styles.css";

import { useSelector } from "react-redux";

import Todo from "./Todo/Todo";

const Todos = ({ setCurrentId }) => {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return !todos.length ? (
    <p className="tasks-n">Your todo list seems to be empty...</p>
  ) : (
    <>
      <p className="tasks-n">Tasks - {todos.length}</p>
      {todos.map((todo) => (
        <div className="todo" key={todo._id}>
          <Todo todo={todo} setCurrentId={setCurrentId} />
        </div>
      ))}
    </>
  );
};

export default Todos;
