import React from "react";
import Todo from "./Todo";

const TodosList = (props) => {
  const { todos, setTodos, api_key } = props;
  return todos.map((el) => {
    return <Todo key={el.id} todo={el} setTodos={setTodos} api_key={api_key}/>;
  });
};

export default TodosList;
