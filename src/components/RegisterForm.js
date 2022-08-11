import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const RegisterForm = (props) => {
  const { URL } = useContext(ModeContext);
  const { setLoggedIn, setApi_key } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        console.log("objet headers : ", response);
        if (response.ok) {
          return response.json();
        }
        throw new Error("HTTP request problem");
      })
      .then((data) => {
        console.log(data);
        if (data.valid) {
          alert(`Your API KEY is : ${data.data.api_key}`);
          console.log(data);
          setLoggedIn(true);
          setApi_key(data.data.api_key);
        } else {
          alert("Your credentials are not correct, try again");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="username">
          Your name
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        register
      </button>
    </form>
  );
};

export default RegisterForm;
