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
        <div className="hero">
          <div className="home-title">
            <h1>STARBOUNTY</h1>
          </div>
          <div className="navbar">
            <div className="home">
              <Link to="/">Home</Link>
            </div>
            <div className="signup">
              <Link to="/signup">Sign Up</Link>
            </div>
            <div className="login">
              {auth.token ? (
                <Link to="/" onClick={handleLogout}>
                  Log Out
                </Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </div>
            <div className="createproject">
              <Link to="/createaproject">Create A Project</Link>
            </div>
            <div className="about">
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
