import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";
import SelectTodos from "./SelectTodos";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  {
    task: "Faires des courses",
    done: true,
    id: 1,
  },
  {
    task: "Réviser ES6 classes",
    done: false,
    id: 2,
  },
  {
    task: "Aroser les plantes",
    done: false,
    id: 3,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  /* useEffect(() => {
    const API_KEY = "202c3b60-0977-11eb-8cd1-f3248197ab0d";
    const IP = "172.18.246.84";
    const PORT = 7777;
    const URL = `http://${IP}:${PORT}`;
    fetch(`${URL}/filter/${filter}`, {
      method: "GET",
      headers: {
        authorization: API_KEY,
      },
    })
      .then((response) => {
        console.log("objet headers : ", response);
        if (response.ok) {
          return response.data.json();
        }
        throw new Error("HTTP request problem");
      })
      .then((data) => {
        console.log("body format JSON : ", data);
        setTodos(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [filter, todos]); */

  useEffect(() => {
    document.title = todos.length
      ? `Vous avez ${todos.length} tâches à accomplir !`
      : "Que devez vous faire aujourd'hui ?";
  }, [todos.length]);

  const filteredTodos = todos.filter((el) => {
    if (filter === "done") {
      return el.done === true;
    }
    if (filter === "undone") {
      return el.done === false;
    }
    return true;
  });
  const completedCount = todos.filter((el) => el.done === true).length;

  return (
    <main>
      <h2 className="mb-3">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      <SelectTodos filter={filter} setFilter={setFilter} />
      <TodosList todos={filteredTodos} setTodos={setTodos} />
      <AddTodoForm setFilter={setFilter} setTodos={setTodos} />
    </main>
  );
};

export default Todos;
