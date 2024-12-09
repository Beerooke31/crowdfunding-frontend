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
        {auth.token ? (
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
        <Link to="/signup">Sign Up</Link>
        <Link to="/createaproject">Create A Project</Link>
        <Link to="/pledge">Donate Here!</Link>
        <Link to="/about">About</Link>
        <Link to="/contactus">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
