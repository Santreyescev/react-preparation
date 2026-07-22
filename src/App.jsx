import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieGrid from "./components/MovieGrid";
import MovieDetails from "./components/MovieDetails";

function App() {

const [movies,setMovies]=useState([]);
const [selected,setSelected]=useState(null);

return (

<div>

<Navbar/>

<Search
setMovies={setMovies}
/>

<MovieGrid
movies={movies}
setSelected={setSelected}
/>

{selected &&
<MovieDetails
id={selected}
close={()=>setSelected(null)}
/>
}

</div>

);

}

export default App;