import React from "react";
import "./styles.css";

import { useSelector } from "react-redux";

import Todo from "./Todo/Todo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <Todo />
    </div>
  );
};

export default Todos;
