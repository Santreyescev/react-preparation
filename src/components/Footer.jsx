import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>🎬 Movie Explorer</h3>

        <p>
          Search thousands of movies using the OMDb API.
        </p>

        <div className="footer-links">
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OMDb API
          </a>

          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>

          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite
          </a>
        </div>

        <p className="copyright">
         &copy; {year} Santiago Reyes • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}