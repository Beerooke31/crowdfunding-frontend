import { useState } from "react";
import "./SignupForm.css";

function SignupForm() {
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

  return (
    <form>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastName"
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
