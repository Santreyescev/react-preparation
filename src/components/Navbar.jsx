import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎬 Movie Explorer
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/movies">
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink to="/favorites">
            Favorites
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}