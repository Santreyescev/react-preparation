import { useState } from "react";
import Search from "./Search";
import MovieGrid from "./MovieGrid";
import MovieDetails from "./MovieDetails";

export default function Movies() {

  const [movies,setMovies]=useState([]);
  const [selected,setSelected]=useState(null);

  return(
    <div className="page">

      <h1>Movies</h1>

      <Search setMovies={setMovies}/>

      {selected ? (
        <MovieDetails
        imdbID={selected}
        setSelected={setSelected}
        />
      ) : (

      <MovieGrid movies={movies}
      setSelected={setSelected}
      />
      )}

    </div>
  )

}