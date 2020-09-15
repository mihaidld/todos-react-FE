import React, { useContext } from "react";
import Todos from "./components/Todos";
import ModeSwitch from "./components/ModeSwitch";
import { ModeContext } from "./context/ModeContext";

function App() {
  const { mode } = useContext(ModeContext);
  const modeClass = mode === "dark" ? "bg-dark text-white" : "";

  return (
    <div className={`min-vh-100 py-3 ${modeClass}`}>
      <div className="container my-4">
        <header className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h1>ToDos App</h1>
          <ModeSwitch />
        </header>
        <Todos />
        <p className="mt-5">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
