import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/omdb";
import "../styles/Details.css";

export default function MovieDetails({ imdbID, setSelected }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovie() {
      try {
        setLoading(true);
        setError("");

        const result = await getMovieDetails(imdbID);

        if (result.Response === "False") {
          throw new Error(result.Error);
        }

        setMovie(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [imdbID]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => setSelected(null)}>
          Back to movies
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <button
        className="back-button"
        onClick={() => setSelected(null)}
      >
        ← Back to movies
      </button>

      <div className="details-content">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="details-poster"
        />

        <div className="details-information">
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>IMDb rating:</strong> {movie.imdbRating}</p>

          <h3>Plot</h3>
          <p>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

