import axios from "axios";

const API_KEY = "a38dc1e9";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (title) => {
    const response = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            s: title
        }
    });

    return response.data;
};

export const getMovie = async (id) => {
    const response = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            i: id
        }
    });

    return response.data;
};