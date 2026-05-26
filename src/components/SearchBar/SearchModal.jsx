import "./SearchModal.css";

import { useEffect, useState } from "react";

import { FaSearch, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

import { searchMovies } from "../../services/movieService";

import { imageBaseURL } from "../../api/tmdb";

const SearchModal = ({
  show,
  onClose,
}) => {

  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  useEffect(() => {

    const delayDebounce = setTimeout(async () => {

      if (query.trim()) {

        const data =
          await searchMovies(query);

        setResults(data);

      } else {

        setResults([]);

      }

    }, 500);

    return () => clearTimeout(delayDebounce);

  }, [query]);

  if (!show) return null;

  return (

    <div className="search-modal">

      <div className="search-modal-content">

        {/* HEADER */}

        <div className="search-header">

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              autoFocus
            />

          </div>

          <button
            className="close-search"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        {/* RESULTS */}

        <div className="search-results-grid">

          {results.map((movie) => (

            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="search-card"
              onClick={onClose}
            >

              <img
                src={`${imageBaseURL}${movie.poster_path}`}
                alt={movie.title}
              />

              <h4>{movie.title}</h4>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
};

export default SearchModal;