import "./Watchlist.css";

import { Link } from "react-router-dom";
import { imageBaseURL } from "../../api/tmdb";

import { useWatchlist } from "../../context/useWatchlist";

const Watchlist = () => {

  const {
    watchlist,
    removeFromWatchlist,
  } = useWatchlist();

  return (

    <section className="watchlist-page">

      <div className="container">

        <h1 className="watchlist-title">
          My Watchlist
        </h1>

        {/* EMPTY STATE */}
        {watchlist.length === 0 ? (

          <div className="empty-state">
            <h2>No Movies Saved </h2>
            <p>Go and add some movies to your list</p>
          </div>

        ) : (

          <div className="watchlist-grid">

            {watchlist.map((movie) => (

              <div className="watchlist-card" key={movie.id}>

                <Link to={`/movie/${movie.id}`}>

                  <img
                    src={
                      movie.poster_path
                        ? `${imageBaseURL}${movie.poster_path}`
                        : "https://via.placeholder.com/300x450"
                    }
                    alt={movie.title}
                  />

                  <h4>{movie.title}</h4>

                </Link>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWatchlist(movie.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );
};

export default Watchlist;