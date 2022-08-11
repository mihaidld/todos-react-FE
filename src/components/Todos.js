import React, { useState, useEffect, useContext } from "react";
import TodosList from "./TodosList";
import SelectTodos from "./SelectTodos";
import AddTodoForm from "./AddTodoForm";
import { ModeContext } from "./../context/ModeContext";

const Todos = (props) => {
  const {api_key} = props
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all");
  const { URL } = useContext(ModeContext);

  useEffect(() => { 
    fetch(`${URL}/list`, {
      method: "GET",
      headers: {
        authorization: api_key,
      },
    })
      .then((response) => {
        console.log("objet headers : ", response);
        if (response.ok) {
          return response.json();
        }
        throw new Error("HTTP request problem");
      })
      .then((data) => {
        console.log("body format JSON : ", data);
        setTodos(data.data);
        setLoading(false)
      })
      .catch((error) => {
        alert(error.message);
      });
    }, [URL, api_key]);

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
      {loading && <p>Loading ...</p>}
      {!loading && (
        <>
      <h2 className="mb-3">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      <SelectTodos filter={filter} setFilter={setFilter} />
      <TodosList todos={filteredTodos} setTodos={setTodos} api_key={api_key} />
      <AddTodoForm setFilter={setFilter} setTodos={setTodos} api_key={api_key}/>
      </>)}
    </main>
  );
};

export default Todos;
