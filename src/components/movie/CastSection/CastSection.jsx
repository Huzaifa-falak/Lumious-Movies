import "./CastSection.css";

import { useEffect, useState } from "react";

import {
  getMovieCredits,
} from "../../../services/movieService";

import { imageBaseURL } from "../../../api/tmdb";

const CastSection = ({ movieId }) => {

  const [cast, setCast] = useState([]);

  useEffect(() => {

    const fetchCast = async () => {

      const data =
        await getMovieCredits(movieId);

      setCast(data);

    };

    fetchCast();

  }, [movieId]);

  return (

    <section className="cast-section">

      <div className="container">

        <div className="cast-header">

          <h2>Top Cast</h2>

        </div>

        <div className="cast-row">

          {cast.slice(0,12).map((actor) => (

            <div
              className="cast-card"
              key={actor.id}
            >

              <img
                src={
                  actor.profile_path
                  ? `${imageBaseURL}${actor.profile_path}`
                  : "https://via.placeholder.com/300x450"
                }
                alt={actor.name}
              />

              <h4>{actor.name}</h4>

              <p>{actor.character}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CastSection;