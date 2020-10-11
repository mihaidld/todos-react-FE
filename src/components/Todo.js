import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const Todo = (props) => {
  const { todo, setTodos, api_key } = props;
  const { URL } = useContext(ModeContext);
  const style = {
    textDecoration: todo.done ? "line-through" : "none",
  };
  const idTodo = todo.id;

  const setUndoneTodo = (idTodo) => {
    fetch(`${URL}/undone/${idTodo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: api_key,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.valid);
        if (data.valid) {
          console.log(data.data);
          setTodos(data.data);
        } else {
          alert("Your credentials are not correct, try again");
        }
      })
      .catch((error) => console.log(error));
  };

  const setDoneTodo = (idTodo) => {
    fetch(`${URL}/done/${idTodo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: api_key,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.valid);
        if (data.valid) {
          console.log(data.data);
          setTodos(data.data);
        } else {
          alert("Your credentials are not correct, try again");
        }
      })
      .catch((error) => console.log(error));
  };
  
  const deleteTodo = (idTodo) => {
    fetch(`${URL}/delete/${idTodo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: api_key,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.valid);
        if (data.valid) {
          console.log(data.data);
          setTodos(data.data);
        } else {
          alert("Your credentials are not correct, try again");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="shadow-sm border p-2 d-flex align-items-center justify-content-between mb-2">
      <span style={style}>{todo.task}</span>
      <div className="btn-group">
        {todo.done ? (
          <button
            className="btn btn-outline-light btn-sm btn-dark"
            type="button"
            onClick={() => setUndoneTodo(idTodo)}
          >
            Rétablir
          </button>
        ) : (
          <button
            className="btn btn-light btn-sm"
            type="button"
            onClick={() => setDoneTodo(idTodo)}
          >
            Terminer
          </button>
        )}
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={() => deleteTodo(idTodo)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Todo;
