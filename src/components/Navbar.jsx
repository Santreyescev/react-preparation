import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        🎬 Movie Explorer
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="#movies">Movies</a>
          </li>

          <li>
            <a href="#favorites">Favorites</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}