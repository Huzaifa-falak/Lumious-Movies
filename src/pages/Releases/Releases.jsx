import "./Releases.css";

import {
  useEffect,
  useState,
} from "react";

import MovieCard from
"../../components/movie/MovieCard/MovieCard";

import MovieCardSkeleton from
"../../components/skeleton/MovieCardSkeleton";

import {
  getLatestMovies,
  getLatestTVShows,
} from "../../services/movieService";

const Releases = () => {

  const [movies, setMovies] =
    useState([]);

  const [shows, setShows] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const movieData =
          await getLatestMovies();

        const tvData =
          await getLatestTVShows();

        setMovies(movieData || []);
        setShows(tvData || []);

      } catch (error) {

        console.log(
          "Release page error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, []);

  return (

    <section className="releases-page">

      <div className="container">

        
        <div className="release-hero">

          <h1>
            Latest Releases
          </h1>

          <p>
            Discover the newest movies and TV shows
            streaming right now.
          </p>

        </div>

        <div className="release-section">

          <div className="section-title">

            <h2>
              Latest Movies
            </h2>

          </div>

          <div className="row g-4">

            {loading ? (

              Array.from({ length: 8 }).map((_, i) => (

                <div
                  className="col-lg-3 col-md-4 col-12"
                  key={i}
                >

                  <MovieCardSkeleton />

                </div>

              ))

            ) : (

              movies.map((movie) => (

                <div
                  className="col-lg-3 col-md-4 col-12"
                  key={movie.id}
                >

                  <MovieCard movie={movie} />

                </div>

              ))

            )}

          </div>

        </div>

       
        <div className="release-section">

          <div className="section-title">

            <h2>
              Latest TV Shows
            </h2>

          </div>

          <div className="row g-4">

            {loading ? (

              Array.from({ length: 8 }).map((_, i) => (

                <div
                  className="col-lg-3 col-md-4 col-12"
                  key={i}
                >

                  <MovieCardSkeleton />

                </div>

              ))

            ) : (

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

            )}

          </div>

        </div>

      </div>

    </section>

  );

};

export default Releases;

