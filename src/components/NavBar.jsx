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
        <div class="hero">
          <div class="home-title">
            <h1>STARBOUNTY</h1>
          </div>
          <div class="navbar">
            <div class="home">
              <Link to="/">Home</Link>
            </div>
            <div class="signup">
              <Link to="/signup">Sign Up</Link>
            </div>
            <div class="login">
              {auth.token ? (
                <Link to="/" onClick={handleLogout}>
                  Log Out
                </Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </div>
            <div class="createproject">
              <Link to="/createaproject">Create A Project</Link>
            </div>
            <div class="about">
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
