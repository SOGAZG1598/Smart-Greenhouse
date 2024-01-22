import "../styles/Log.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect the user to the dashboard page
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input
          type="password"
          id="password"
          name="password"
          required
          // Add the placeholder attribute with the preview text
          placeholder="Password"
        />
       <div>
      <button>ENTER</button>
  </div>
      </div>
      
    </form>
    
    
  );
}

function LoginPage(props) {
  return (
    <div>
      <h1>LOG IN</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;