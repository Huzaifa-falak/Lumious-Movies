import "./TrendingMovies.css";

import { useEffect, useState } from "react";

import { getTrendingMovies } from "../../../services/movieService";

import MovieCard from "../MovieCard/MovieCard";

const TrendingMovies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {

      const data = await getTrendingMovies();

      setMovies(data);

    };

    fetchMovies();

  }, []);

  return (

    <section className="trending-section">

      <div className="container">

        <div className="section-header">

          <h2>Trending Movies</h2>

        </div>

        <div className="movies-row">

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default TrendingMovies;