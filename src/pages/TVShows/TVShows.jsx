import { useEffect, useState } from "react";

import MovieCard from "../../components/movie/MovieCard/MovieCard";
import MovieCardSkeleton from "../../components/skeleton/MovieCardSkeleton";

import { getPopularTVShows } from "../../services/movieService";
import "./TVShows.css";

const TVShows = () => {

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTVShows = async () => {

      try {
        setLoading(true);

        const data = await getPopularTVShows();

        setShows(data ?? []); 

      } catch (error) {
        console.log("Error loading TV Shows:", error);
        setShows([]);
      } finally {
        setLoading(false);
      }

    };

    fetchTVShows();

  }, []);

  return (

    <section className="tvshows-page">

      <div className="container">

       
       <div className="tvshows-header">

  <h1>
    Popular TV Shows
  </h1>

  <p>
    Explore trending and top-rated TV series from around the world.
    Watch the latest episodes, discover new seasons, and enjoy
    premium entertainment experience.
  </p>

</div>

       
        <div className="row g-4 tvshows-grid">

          {loading ? (

            Array.from({ length: 12 }).map((_, i) => (
              <div className="col-lg-3 col-md-4 col-12" key={i}>
                <MovieCardSkeleton />
              </div>
            ))

          ) : shows.length > 0 ? (

            shows.map((show) => (
  <div
    className="col-lg-3 col-md-4 col-12"
    key={show.id}
  >

    <MovieCard
      movie={show}
      mediaType="tv"
    />

  </div>
))

          ) : (

            <div className="empty-text">
              No TV Shows Found
            </div>

          )}

        </div>

      </div>

    </section>

  );
};

export default TVShows;