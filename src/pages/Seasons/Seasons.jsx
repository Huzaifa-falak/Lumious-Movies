import "./Seasons.css";

import { useEffect, useState } from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import {
  getTVSeasons,
} from "../../services/movieService";

import {
  imageBaseURL,
} from "../../api/tmdb";

const Seasons = () => {

  const { id } = useParams();

  const [seasons, setSeasons] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchSeasons = async () => {

      try {

        setLoading(true);

        const data =
          await getTVSeasons(id);

        setSeasons(data || []);

      } catch (error) {

        console.log(
          "Error loading seasons:",
          error
        );

        setSeasons([]);

      } finally {

        setLoading(false);

      }

    };

    fetchSeasons();

  }, [id]);

  if (loading) {

    return (

      <div className="text-center text-white py-5">
        Loading Seasons...
      </div>

    );

  }

  return (

    <section className="seasons-page">

      <div className="container">

        <div className="seasons-header">

          <h1>
            Seasons
          </h1>

          <p className="text-white">
            Explore all seasons and episodes.
          </p>

        </div>

        <div className="row g-4">

          {seasons.map((season) => (

            <div
              className="col-lg-3 col-md-4 col-6"
              key={season.id}
            >

              <Link
                to={`/tv/${id}/season/${season.season_number}`}
                className="season-card text-decoration-none"
              >

                <img
                  src={
                    season.poster_path
                      ? `${imageBaseURL}${season.poster_path}`
                      : "https://placehold.co/500x750?text=Season"
                  }
                  alt={season.name}
                />

                <div className="season-info">

                  <h5>
                    {season.name}
                  </h5>

                  <p>
                    {season.episode_count} Episodes
                  </p>

                </div>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Seasons;