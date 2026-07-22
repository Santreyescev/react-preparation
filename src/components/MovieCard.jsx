import "../styles/MovieCard.css";

export default function MovieCard({movie,setSelected}){

return(

<div
className="card"
onClick={()=>setSelected(movie.imdbID)}
>

<img

src={movie.Poster}

alt={movie.Title}

/>

<h3>{movie.Title}</h3>

<p>{movie.Year}</p>

</div>

);

}