import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTodos } from "./actions/todos";

// Import Components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <Form />
        <Todos />
      </div>
    </>
  );
};

export default App;
