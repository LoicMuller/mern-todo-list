import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTodos } from "./actions/todos";

// Import Components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [currentId, dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Todos setCurrentId={setCurrentId} />
      </div>
    </>
  );
};

export default App;
