import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function LoginForm(props) {
  
  const [password, setPassword] = useState("");

  
  const handleChange = (event) => {

    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          // Add the placeholder attribute with the preview text
          placeholder="Password"
        />
      </div>
      <div>
        <button type="submit">ENTER</button>
      </div>
    </form>
  );
}

function LoginPage(props) {
  const handleLogin = (password) => {
    // TODO: Implement the login logic here
    // For example, you can call an API to verify the password
    // and store the token in the local storage or session storage
    // You can also use Redux to manage the global state
    // For simplicity, we will just alert the password
    alert(`Password: ${password}`);
  };

  return (
    <div>
      <h1>LOG IN</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;
