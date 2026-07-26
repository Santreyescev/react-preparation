const API_KEY = "a38dc1e9";
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(title) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log("OMDb response:", data);

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
}

export async function getMovieDetails(imdbID) {
  const url =
    `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`;

  const response = await fetch(url);
  const data = await response.json();

  console.log("OMDb details:", data);

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
}
