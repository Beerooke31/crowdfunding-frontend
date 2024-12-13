import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";

import "./NavBar.css";

function NavBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
        <Link to="/projects">Projects</Link>
        <Link to="/createaproject">Create A Project</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
