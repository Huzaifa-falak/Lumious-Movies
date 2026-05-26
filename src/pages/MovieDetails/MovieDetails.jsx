import "./MovieDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails, getMovieVideos } from "../../services/movieService";

import { imageBaseURL } from "../../api/tmdb";

import TrailerModal from "../../components/movie/TrailerModal/TrailerModal";
import CastSection from "../../components/movie/CastSection/CastSection";

import { useWatchlist } from "../../context/useWatchlist";

const MovieDetails = () => {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const {
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  } = useWatchlist();

  
  const saved = movie?.id
    ? isInWatchlist(movie.id)
    : false;

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    };

    fetchMovie();

  }, [id]);

  const handleTrailer = async () => {

    try {

      const videos = await getMovieVideos(id);

      const trailer = videos.find(
        (video) =>
          video.type === "Trailer" &&
          video.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        alert("Trailer not available");
      }

    } catch (error) {
      console.log("Error fetching trailer:", error);
    }

  };

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (

    <section
      className="movie-details"
      style={{
        backgroundImage:
          `url(${imageBaseURL}${movie.backdrop_path})`
      }}
    >

      <div className="details-overlay">

        <div className="container">

          <div className="details-content">

           
            <div className="details-poster">
              <img
                src={`${imageBaseURL}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

         
            <div className="details-info">

              <h1>{movie.title}</h1>

              <div className="movie-meta">

                <span>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </span>

                <span>
                  {movie.release_date}
                </span>

              </div>

              <div className="genre-list">

                {movie.genres?.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                  </span>
                ))}

              </div>

              <p>{movie.overview}</p>

              
              <div className="details-buttons">

                <button onClick={handleTrailer}>
                  Watch Trailer
                </button>

                <button
                  onClick={() => {
                    if (saved) {
                      removeFromWatchlist(movie.id);
                    } else {
                      addToWatchlist(movie);
                    }
                  }}
                >
                  {saved
                    ? "Remove Watchlist"
                    : "Add Watchlist"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      
      <TrailerModal
        show={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerKey={trailerKey}
      />

      
      <CastSection movieId={id} />

    </section>
  );
};

export default MovieDetails;