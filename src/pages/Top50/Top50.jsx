import "./Top50.css";

import {
  useEffect,
  useState,
} from "react";

import MovieCard from
"../../components/movie/MovieCard/MovieCard";

import MovieCardSkeleton from
"../../components/skeleton/MovieCardSkeleton";

import {
  getTop50Movies,
} from "../../services/movieService";

const Top50 = () => {

  const [movies, setMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchMovies = async () => {

      try {

        setLoading(true);

        const data =
          await getTop50Movies();

        setMovies(data || []);

      } catch (error) {

        console.log(
          "Top50 Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchMovies();

  }, []);

  return (

    <section className="top50-page">

      <div className="container">

       
        <div className="top50-hero">

          <h1>
            Top 50 Movies
          </h1>

          <p>
            Explore the highest-rated movies
            loved by audiences worldwide.
          </p>

        </div>

        
        <div className="row g-4">

          {loading ? (

            Array.from({ length: 12 }).map((_, i) => (

              <div
                className="col-lg-3 col-md-4 col-12"
                key={i}
              >

                <MovieCardSkeleton />

              </div>

            ))

          ) : (

            movies.map((movie, index) => (

              <div
                className="col-lg-3 col-md-4 col-12"
                key={movie.id}
              >

                <div className="top50-card">

              
                  <div className="rank-badge">

                    {index + 1}

                  </div>

                  <MovieCard movie={movie} />

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </section>

  );

};

export default Top50;