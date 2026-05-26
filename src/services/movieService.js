import { tmdbAPI, API_KEY } from "../api/tmdb";

// TRENDING
export const getTrendingMovies = async () => {
  const res = await tmdbAPI.get(
    `/trending/movie/day?api_key=${API_KEY}`
  );
  return res.data.results;
};

// TOP RATED
export const getTopRatedMovies = async () => {
  const res = await tmdbAPI.get(
    `/movie/top_rated?api_key=${API_KEY}`
  );
  return res.data.results;
};

// POPULAR
export const getPopularMovies = async () => {
  const res = await tmdbAPI.get(
    `/movie/popular?api_key=${API_KEY}`
  );
  return res.data.results;
};

// UPCOMING
export const getUpcomingMovies = async () => {
  const res = await tmdbAPI.get(
    `/movie/upcoming?api_key=${API_KEY}`
  );
  return res.data.results;
};

// DETAILS
export const getMovieDetails = async (id) => {
  const res = await tmdbAPI.get(
    `/movie/${id}?api_key=${API_KEY}`
  );
  return res.data;
};

// VIDEOS
export const getMovieVideos = async (id) => {
  const res = await tmdbAPI.get(
    `/movie/${id}/videos?api_key=${API_KEY}`
  );
  return res.data.results;
};

// SEARCH
export const searchMovies = async (query) => {
  const res = await tmdbAPI.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};

// GENRE FILTER
export const getMoviesByGenre = async (genreId) => {
  const res = await tmdbAPI.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  return res.data.results;
};


export const getMovieCredits = async (id) => {
  const res = await tmdbAPI.get(
    `/movie/${id}/credits?api_key=${API_KEY}`
  );
  return res.data.cast;
};


export const getPopularTVShows = async () => {
  const res = await tmdbAPI.get(
    `/tv/popular?api_key=${API_KEY}`
  );
  return res.data.results;
};

// TV SHOW DETAILS
export const getTVShowDetails = async (id) => {

  const res = await tmdbAPI.get(
    `/tv/${id}?api_key=${API_KEY}`
  );

  return res.data;
};
//TV SEASONS
export const getTVSeasons = async (id) => {

  const res = await tmdbAPI.get(
    `/tv/${id}?api_key=${API_KEY}`
  );

  return res.data.seasons;
};

// seasons episodes
export const getSeasonEpisodes = async (
  tvId,
  seasonNumber
) => {

  const res = await tmdbAPI.get(
    `/tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}`
  );

  return res.data;
};

//latest movies and tv shows for releases page
export const getLatestMovies = async () => {

  const response = await tmdbAPI.get(
    `/movie/now_playing?api_key=${API_KEY}`
  );

  return response.data.results;

};

export const getLatestTVShows = async () => {

  const response = await tmdbAPI.get(
    `/tv/on_the_air?api_key=${API_KEY}`
  );

  return response.data.results;

};
// top 50 movies for top 50 page 
export const getTop50Movies = async () => {

  try {

    const page1 = await tmdbAPI.get(
      `/movie/top_rated?api_key=${API_KEY}&page=1`
    );

    const page2 = await tmdbAPI.get(
      `/movie/top_rated?api_key=${API_KEY}&page=2`
    );

    const page3 = await tmdbAPI.get(
      `/movie/top_rated?api_key=${API_KEY}&page=3`
    );

    const allMovies = [

      ...page1.data.results,
      ...page2.data.results,
      ...page3.data.results,

    ];

    return allMovies.slice(0, 50);

  } catch (error) {

    console.log(
      "Top 50 fetch error:",
      error
    );

    return [];

  }

};
