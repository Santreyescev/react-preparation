import { useState } from "react";
import { searchMovies } from "../api/omdb";
import "../styles/Search.css";

export default function Search({ setMovies }) {
  const [text, setText] = useState("");

  const handleSearch = async () => {
    if (!text.trim()) return;

    try {
      const result = await searchMovies(text);

      if (result.Search) {
        setMovies(result.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setMovies([]);
      alert(error.message);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={text}
        placeholder="Search movies"
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
