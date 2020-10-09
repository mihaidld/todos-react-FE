import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const SelectTodos = (props) => {
  const { mode } = useContext(ModeContext);
  const modeClass = mode === "dark" ? "bg-dark text-white" : "";
  const { filter, setFilter } = props;
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        className={`form-select ${modeClass}`}
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        {/* eslint-disable-next-line */}
        <option value="all">Toutes 🌈</option>
        {/* eslint-disable-next-line */}
        <option value="done">Terminées 💪</option>
        {/* eslint-disable-next-line */}
        <option value="undone">pas Terminées 🌪</option>
      </select>
    </div>
  );
};

export default SelectTodos;
