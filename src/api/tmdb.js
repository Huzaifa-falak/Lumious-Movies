import axios from "axios";

export const API_KEY = "57ecc1931d8e90b9f513b28e91d6ef58";

export const tmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const imageBaseURL = "https://image.tmdb.org/t/p/original";