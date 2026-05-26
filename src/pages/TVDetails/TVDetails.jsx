import "./TVDetails.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import {
  getTVShowDetails,
} from "../../services/movieService";

import {
  imageBaseURL,
} from "../../api/tmdb";

const TVDetails = () => {

  const { id } = useParams();

  const [show, setShow] =
    useState(null);

  useEffect(() => {

    const fetchDetails = async () => {

      try {

        const data =
          await getTVShowDetails(id);

        setShow(data);

      } catch (error) {

        console.log(
          "Error loading TV details:",
          error
        );

      }

    };

    fetchDetails();

  }, [id]);

  if (!show) {

    return (

      <div className="text-center text-white py-5">
        Loading...
      </div>

    );

  }

  return (

    <section className="tv-details-page">

      {/* BACKDROP */}
      <div
        className="tv-backdrop"
        style={{
          backgroundImage:
            `url(${imageBaseURL}${show.backdrop_path})`
        }}
      >

        <div className="tv-overlay">

          <div className="container">

            <div className="row align-items-center">

              {/* POSTER */}
              <div className="col-lg-4 text-center mb-4">

                <img
                  src={`${imageBaseURL}${show.poster_path}`}
                  alt={show.name}
                  className="img-fluid tv-poster"
                />

              </div>

              {/* INFO */}
              <div className="col-lg-8 text-white">

                <h1 className="fw-bold mb-3">
                  {show.name}
                </h1>

                <div className="d-flex gap-3 mb-3 flex-wrap">

                  <span className="tv-badge">
                    ⭐ {show.vote_average?.toFixed(1)}
                  </span>

                  <span className="tv-badge">
                    {show.first_air_date}
                  </span>

                  <span className="tv-badge">
                    {show.number_of_seasons} Seasons
                  </span>

                </div>

                {/* GENRES */}
                <div className="mb-4 d-flex flex-wrap gap-2">

                  {show.genres?.map((genre) => (

                    <span
                      key={genre.id}
                      className="genre-pill"
                    >
                      {genre.name}
                    </span>

                  ))}

                </div>

                {/* OVERVIEW */}
                <p className="tv-overview">
                  {show.overview}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SEASONS */}
      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="text-white">
            Seasons
          </h2>

          <Link
            to={`/tv/${id}/seasons`}
            className="btn btn-warning fw-semibold"
          >
            View All
          </Link>

        </div>

        <div className="row g-4">

          {show.seasons?.map((season) => (

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
                  className="img-fluid rounded"
                />

                <div className="season-content">

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

export default TVDetails;