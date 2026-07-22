import {useEffect,useState} from "react";

import {getMovie} from "../api/omdb";

import "../styles/Details.css";

export default function MovieDetails({id,close}){

const [movie,setMovie]=useState(null);

useEffect(()=>{

async function load(){

const result=await getMovie(id);

setMovie(result);

}

load();

},[id]);

if(!movie)return <h2>Loading...</h2>;

return(

<div className="details">

<button onClick={close}>
Close
</button>

<img src={movie.Poster}/>

<div>

<h1>{movie.Title}</h1>

<h3>{movie.Year}</h3>

<h3>{movie.Genre}</h3>

<h3>{movie.Runtime}</h3>

<h3>⭐ {movie.imdbRating}</h3>

<p>{movie.Plot}</p>

<p><strong>Actors:</strong> {movie.Actors}</p>

<p><strong>Director:</strong> {movie.Director}</p>

</div>

</div>

);

}