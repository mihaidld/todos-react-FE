import React, { useState, useContext } from "react";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import Todos from "./components/Todos.js";
import ModeSwitch from "./components/ModeSwitch";
import { ModeContext } from "./context/ModeContext";

function App() {
  const { mode } = useContext(ModeContext);
  const modeClass = mode === "dark" ? "bg-dark text-white" : "";
  const [loggedIn, setLoggedIn] = useState(false);
  const [api_key, setApi_key] = useState("");
  const handleButtonClick = () => {
    setLoggedIn(false);
  };

  return (
    <div className={`min-vh-100 py-3 ${modeClass}`}>
      <div className="container my-4">
        <header className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h1>ToDos App</h1>
          <ModeSwitch />
        </header>
        {!loggedIn ? (
          <>
            <LoginForm setLoggedIn={setLoggedIn} setApi_key={setApi_key} />
            <p className="mb-3">or</p>
            <RegisterForm setLoggedIn={setLoggedIn} setApi_key={setApi_key} />
          </>
        ) : (
          <>
            <Todos api_key={api_key} />
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleButtonClick}
            >
              Log out
            </button>
          </>
        )}
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
