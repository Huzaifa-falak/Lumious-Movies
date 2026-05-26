import "./Episodes.css";

import { useEffect, useState } from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getSeasonEpisodes,
} from "../../services/movieService";

import {
  imageBaseURL,
} from "../../api/tmdb";

const Episodes = () => {

  const {
    id,
    seasonNumber,
  } = useParams();

  const [season, setSeason] =
    useState(null);

  useEffect(() => {

    const fetchEpisodes = async () => {

      const data =
        await getSeasonEpisodes(
          id,
          seasonNumber
        );

      setSeason(data);

    };

    fetchEpisodes();

  }, [id, seasonNumber]);

  if (!season) {

    return (
      <div className="text-white text-center py-5">
        Loading...
      </div>
    );

  }

  return (

    <section className="episodes-page">

      <div className="container">

      
        <div className="episodes-header">

          <h1>
            {season.name}
          </h1>

          <p>
            {season.overview ||
              "Explore all episodes from this season."}
          </p>

        </div>

       
        <div className="episodes-list">

          {season.episodes?.map((episode) => (

            <div
              className="episode-card"
              key={episode.id}
            >

             
              <div className="episode-image">

                <img
                  src={
                    episode.still_path
                      ? `${imageBaseURL}${episode.still_path}`
                      : "https://placehold.co/600x400?text=Episode"
                  }
                  alt={episode.name}
                />

              </div>

             
              <div className="episode-content">

                <div className="episode-top">

                  <h3>
                    Episode {episode.episode_number}
                  </h3>

                  <span>
                    ⭐ {episode.vote_average?.toFixed(1)}
                  </span>

                </div>

                <h2>
                  {episode.name}
                </h2>

                <p>
                  {episode.overview ||
                    "No overview available."}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Episodes;