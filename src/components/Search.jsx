import {useState} from "react";
import {searchMovies} from "../api/omdb";
import "../styles/Search.css";

export default function Search({setMovies}){

const [text,setText]=useState("");

const handleSearch=async()=>{

if(!text)return;

const result=await searchMovies(text);

if(result.Search){

setMovies(result.Search);

}else{

setMovies([]);

}

};

return(

<div className="search">

<input
placeholder="Search movies..."
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<button onClick={handleSearch}>
Search
</button>

</div>

);

}