import React from "react";
import Todo from "./Todo";

const TodosList = (props) => {
  const { todos, setTodos } = props;
  return todos.map((el) => {
    return <Todo key={el.id} todo={el} setTodos={setTodos} />;
  });
};

export default TodosList;
