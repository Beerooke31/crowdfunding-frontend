import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignup from "../api/post-signup";
import { useAuth } from "../hooks/use-auth";
import "./SignupForm.css";

function SignupForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
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
    if (
      credentials.firstname &&
      credentials.lastname &&
      credentials.email &&
      credentials.username &&
      credentials.password
    ) {
      postSignup(
        credentials.username,
        credentials.password,
        credentials.email
      ).then((response) => {
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/login");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="signupcontainer">
        <h1>Sign Up for an Account</h1>
        <div class="signupinputs">
          <div>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username">Create a username:</label>
            <input
              type="text"
              id="username"
              placeholder="Create a username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Create a password:</label>
            <input
              type="text"
              id="password"
              placeholder="Create a password"
              onChange={handleChange}
            />
          </div>
          <button class="bluebutton" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
