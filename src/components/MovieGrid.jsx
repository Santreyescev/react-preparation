import MovieCard from "./MovieCard";

export default function MovieGrid({movies,setSelected}){

return(

<div className="grid">

{

movies.map(movie=>

<MovieCard

key={movie.imdbID}

movie={movie}

setSelected={setSelected}

/>

)

}

</div>

);

}