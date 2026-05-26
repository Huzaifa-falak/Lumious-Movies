import "./GenrePage.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import MovieCard from
"../../components/movie/MovieCard/MovieCard";

import MovieCardSkeleton from
"../../components/skeleton/MovieCardSkeleton";

import {
  getMoviesByGenre,
} from "../../services/movieService";

import genres from "../../data/genres";

const GenrePage = () => {

  const { slug } = useParams();

  const [movies, setMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const genre =
    genres.find(
      (g) => g.slug === slug
    );

  useEffect(() => {

    const fetchMovies = async () => {

      if (!genre) return;

      try {

        setLoading(true);

        const data =
          await getMoviesByGenre(
            genre.id
          );

        setMovies(data || []);

      } catch (error) {

        console.log(
          "Genre error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchMovies();

  }, [genre]);

  return (

    <section className="genre-page">

      <div className="container">

      
        <div className="genre-header">

          <h1>
            {genre?.name} Movies
          </h1>

          <p>
            Explore the best
            {` ${genre?.name} `}
            movies from around the world.
          </p>

        </div>

      
        <div className="row g-4">

          {loading ? (

            Array.from({ length: 12 }).map((_, i) => (

              <div
                className="col-lg-3 col-md-4 col-12"
                key={i}
              >

                <MovieCardSkeleton />

              </div>

            ))

          ) : (

            movies.map((movie) => (

              <div
                className="col-lg-3 col-md-4 col-12"
                key={movie.id}
              >

                <MovieCard movie={movie} />

              </div>

            ))

          )}

        </div>

      </div>

    </section>

  );

};

export default GenrePage;