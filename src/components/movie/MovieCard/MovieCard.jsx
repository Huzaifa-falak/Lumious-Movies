import "./MovieCard.css";

import { Link } from "react-router-dom";

import { imageBaseURL } from "../../../api/tmdb";

const MovieCard = ({
  movie,
  mediaType = "movie",
}) => {

  return (

    <div className="movie-card">

      <Link
        to={`/${mediaType}/${movie.id}`}
        className="movie-card text-decoration-none"
      >

        <img
          src={`${imageBaseURL}${movie.poster_path}`}
          alt={movie.title || movie.name}
        />

        <div className="movie-overlay">

          <h3>
            {movie.title || movie.name}
          </h3>

          <span>
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>

        </div>

      </Link>

    </div>

  );

};

export default MovieCard;