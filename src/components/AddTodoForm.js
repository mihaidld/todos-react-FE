import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const AddTodoForm = (props) => {
  const { mode } = useContext(ModeContext);
  const modeClass = mode === "dark" ? "bg-dark text-white" : "";
  const { addTodo, setFilter } = props;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements.todo.value;
    addTodo(newTodoText);
    event.target.reset();
    setFilter((filter) => (filter === "completed" ? "all" : filter));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${modeClass}`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  );
};

export default AddTodoForm;
