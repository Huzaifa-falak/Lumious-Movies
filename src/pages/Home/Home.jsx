import HeroBanner from "../../components/movie/HeroBanner/HeroBanner";

import MovieRow from "../../components/movie/MovieRow/MovieRow";
import InfoSection from "../../components/InfoSection/InfoSection";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/movieService";

import {
  getMoviesByGenre,
} from "../../services/movieService";

const Home = () => {

  return (
    <>

      <HeroBanner />

      <MovieRow
        title="Trending Movies"
        fetchMovies={getTrendingMovies}
      />

      <MovieRow
        title="Popular Movies"
        fetchMovies={getPopularMovies}
      />

      <MovieRow
        title="Top Rated Movies"
        fetchMovies={getTopRatedMovies}
      />

      <MovieRow
        title="Upcoming Movies"
        fetchMovies={getUpcomingMovies}
      />

      <MovieRow
  title="Action Movies"
  fetchMovies={() => getMoviesByGenre(28)}
/>

<MovieRow
  title="Comedy Movies"
  fetchMovies={() => getMoviesByGenre(35)}
/>

<MovieRow
  title="Horror Movies"
  fetchMovies={() => getMoviesByGenre(27)}
/>

<MovieRow
  title="Romance Movies"
  fetchMovies={() => getMoviesByGenre(10749)}
/>

<MovieRow
  title="Sci-Fi Movies"
  fetchMovies={() => getMoviesByGenre(878)}
/>
<InfoSection />

    </>
  );
};

export default Home;