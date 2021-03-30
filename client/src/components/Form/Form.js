import React, { useState, useEffect } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";

import { createTodo, updateTodo } from "../../actions/todos";

const Form = ({ currentId, setCurrentId }) => {
  const [todoData, setTodoData] = useState({
    message: "",
  });
  const todo = useSelector((state) =>
    currentId ? state.todos.find((t) => t._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateTodo(currentId, todoData));
    } else {
      dispatch(createTodo(todoData));
    }

    setCurrentId(null);
    setTodoData({
      message: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        autoComplete="off"
        placeholder="Add a task"
        name="message"
        value={todoData.message}
        onChange={(e) => setTodoData({ ...todoData, message: e.target.value })}
        required
      />
      <button>
        <svg className="addBtn" viewBox="0 0 61 56">
          <g
            id="Groupe_1"
            data-name="Groupe 1"
            transform="translate(-88 -186.065)"
          >
            <rect
              id="Rectangle_1"
              data-name="Rectangle 1"
              width="61"
              height="56"
              rx="20"
              transform="translate(88 186.065)"
              fill="#fc76a1"
            />
            <line
              id="Ligne_2"
              data-name="Ligne 2"
              y1="25"
              transform="translate(118.5 202.065)"
              fill="none"
              stroke="#181820"
              strokeWidth="5"
            />
            <line
              id="Ligne_3"
              data-name="Ligne 3"
              x1="26"
              transform="translate(105.5 214.565)"
              fill="none"
              stroke="#181820"
              strokeWidth="5"
            />
          </g>
        </svg>
      </button>
    </form>
  );
};

export default Form;
