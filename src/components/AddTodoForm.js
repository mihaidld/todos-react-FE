import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const AddTodoForm = (props) => {
  const { mode, URL } = useContext(ModeContext);
  const modeClass = mode === "dark" ? "bg-dark text-white" : "";
  const { setTodos, setFilter, api_key } = props;
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements.todo.value;
    fetch(`${URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: api_key,
      },
      body: JSON.stringify({ task: newTodoText }),
    })
    .then((response) => {
      console.log("objet headers : ", response);
      if (response.ok) {
        return response.json();
      }
      throw new Error("HTTP request problem");
    })
      .then((data) => {
        if (data.valid) {
          console.log(data.data);
          setTodos(data.data);
        } else {
          alert("Your credentials are not correct, try again");
        }
      })
      .catch((error) => console.log(error));

    event.target.reset();
    setFilter((filter) => (filter === "done" ? "all" : filter));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${modeClass}`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary mb-5">
        allons-y !
      </button>
    </form>
  );
};

export default AddTodoForm;
