import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";
import BackgroundImage from "./BackgroundImage.jsx";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      postLogin(credentials.username, credentials.password).then((response) => {
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/");
      });
    }
  };
  return (
    <form>
      <div class="login-container">
        <h1>Log In Stranger</h1>
        <div>
          <div class="inputs">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button class="greenbutton" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
