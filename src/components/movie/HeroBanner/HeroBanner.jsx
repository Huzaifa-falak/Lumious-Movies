import "./HeroBanner.css";

import { useEffect, useState } from "react";

import { FaPlay, FaInfoCircle } from "react-icons/fa";

import {
  getTrendingMovies,
} from "../../../services/movieService";

import { imageBaseURL } from "../../../api/tmdb";

const HeroBanner = () => {

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const fetchHeroMovie = async () => {

      const data = await getTrendingMovies();

      const randomMovie =
        data[Math.floor(Math.random() * data.length)];

      setMovie(randomMovie);
    };

    fetchHeroMovie();

  }, []);

  if (!movie) return null;

  return (

    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${imageBaseURL}${movie.backdrop_path})`,
      }}
    >

      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span className="hero-tag">
              Trending Now
            </span>

            <h1>
              {movie.title}
            </h1>

            <p>
              {movie.overview}
            </p>

            <div className="hero-buttons">

              <button className="play-btn">
                <FaPlay />
                Play
              </button>

              <button className="info-btn">
                <FaInfoCircle />
                More Info
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;