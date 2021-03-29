import React from "react";
import "./styles.css";

import { useSelector } from "react-redux";

import Todo from "./Todo/Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return !todos.length ? (
    <p>Loading...</p>
  ) : (
    <>
      <p className="tasks-n">Tasks - {todos.length}</p>
      {todos.map((todo) => (
        <div className="todo" key={todo._id}>
          <Todo todo={todo} />
        </div>
      ))}
    </>
  );
};

export default Todos;
