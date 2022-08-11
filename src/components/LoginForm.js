import React from "react";

const LoginForm = (props) => {
  const { setLoggedIn, setApi_key } = props;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const api_key = e.target.elements.api_key.value;
    setLoggedIn(true);
    setApi_key(api_key);
  };
  return (
    <form onSubmit={handleFormSubmit} className="mt-4 mb-3">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="api_key">
          Your API KEY
        </label>
        <input className="form-control" id="api_key" name="api_key" required />
      </div>
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        submit
      </button>
    </form>
  );
};

export default LoginForm;
