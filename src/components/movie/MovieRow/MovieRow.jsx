import "./MovieRow.css";

import { useEffect, useState } from "react";

import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../../skeleton/MovieCardSkeleton";

const MovieRow = ({ title, fetchMovies }) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const data = await fetchMovies();

        setMovies(data || []);

      } catch (error) {

        console.log("Error loading movies:", error);
        setMovies([]);

      } finally {
        setLoading(false);
      }

    };

    fetchData();

  }, [fetchMovies]);

  return (

    <section className="movie-row-section py-3">

      <div className="container">

     
        <div className="movie-row-header mb-3">

          <h2 className="fw-bold">
            {title}
          </h2>

        </div>

      
        <div className="movie-row-scroll d-flex gap-3 overflow-auto pb-2">

          {loading ? (

            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="movie-skeleton-wrapper">
                <MovieCardSkeleton />
              </div>
            ))

          ) : (

            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))

          )}

        </div>

      </div>

    </section>

  );
};

export default MovieRow;