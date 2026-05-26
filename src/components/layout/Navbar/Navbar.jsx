import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import SearchModal from "../../SearchBar/SearchModal";
import { useAuth } from "../../../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container navbar-flex">
          <button
            className="navbar-toggler menu-btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <FaBars />
          </button>

          {/* LOGO */}
          <Link className="navbar-brand logo" to="/">
            luminous Movies
          </Link>

          {/* DESKTOP MENU */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/tvshows">
                  TV Shows
                </Link>
              </li>

              <li className="nav-item genre-dropdown">
                <span className="nav-link nav-custom-link">Genres</span>

                <div className="genre-menu">
                  <div className="genre-grid">
                    <Link to="/genre/action">Action</Link>
                    <Link to="/genre/adventure">Adventure</Link>
                    <Link to="/genre/animation">Animation</Link>
                    <Link to="/genre/comedy">Comedy</Link>
                    <Link to="/genre/crime">Crime</Link>
                    <Link to="/genre/documentary">Documentary</Link>

                    <Link to="/genre/drama">Drama</Link>
                    <Link to="/genre/family">Family</Link>
                    <Link to="/genre/fantasy">Fantasy</Link>
                    <Link to="/genre/history">History</Link>
                    <Link to="/genre/horror">Horror</Link>
                    <Link to="/genre/kids">Kids</Link>

                    <Link to="/genre/music">Music</Link>
                    <Link to="/genre/mystery">Mystery</Link>
                    <Link to="/genre/reality">Reality</Link>
                    <Link to="/genre/romance">Romance</Link>
                    <Link to="/genre/scifi-fantasy">Sci-Fi & Fantasy</Link>

                    <Link to="/genre/science-fiction">Science Fiction</Link>

                    <Link to="/genre/thriller">Thriller</Link>
                    <Link to="/genre/war">War</Link>
                    <Link to="/genre/western">Western</Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/release">
                  Release
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/top50">
                  Top 50
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/watchlist">
                  My watchlist
                </Link>
              </li>
            </ul>
          </div>

          <div className="search-icon" onClick={() => setShowSearch(true)}>
            <FaSearch />
          </div>
           <div className="vr text-white ms-5 d-none d-lg-block"></div>
          {user ? (
            <div className="dropdown d-none d-lg-block">
              <button className="user-dropdown-btn" data-bs-toggle="dropdown">
                <div className="user-avatar">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-end custom-dropdown">
                <li className="dropdown-user-email">{user.email}</li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    onClick={logout}
                    className="dropdown-item logout-item"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth"
              className=" auth-btn ms-5 d-none d-lg-block"
            >
              Sign In
            </Link>
          )}
          
        </div>
      
      </nav>
      <SearchModal show={showSearch} onClose={() => setShowSearch(false)} />

      {/* mobile */}

      <div
        className="offcanvas offcanvas-start mobile-menu"
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mobile-logo">luminous Movies</h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav mobile-nav-links">
            <li className="nav-item">
               {user ? (
            <div className="dropdown ">
              <button className="user-dropdown-btn" data-bs-toggle="dropdown">
                <div className="user-avatar">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-end custom-dropdown">
                <li className="dropdown-user-email">{user.email}</li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    onClick={logout}
                    className="dropdown-item logout-item"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth"
              className="auth-btn mobile-auth-btn d-lg-none"
            >
              Sign In
            </Link>
          )}
              <Link className="nav-link" to="/">
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/tvshows">
                TV Shows
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/genres">
                Genres
              </Link>
              <div className="mobile-genres col-4">
                <Link to="/genre/action">Action</Link>
                <Link to="/genre/adventure">Adventure</Link>
                <Link to="/genre/animation">Animation</Link>
                <Link to="/genre/comedy">Comedy</Link>
                <Link to="/genre/crime">Crime</Link>
                <Link to="/genre/documentary">Documentary</Link>
                <Link to="/genre/drama">Drama</Link>
                <Link to="/genre/family">Family</Link>
                <Link to="/genre/fantasy">Fantasy</Link>
                <Link to="/genre/history">History</Link>
                <Link to="/genre/horror">Horror</Link>
                <Link to="/genre/kids">Kids</Link>
                <Link to="/genre/music">Music</Link>
                <Link to="/genre/mystery">Mystery</Link>
                <Link to="/genre/reality">Reality</Link>
                <Link to="/genre/romance">Romance</Link>
                <Link to="/genre/scifi-fantasy">Sci-Fi & Fantasy</Link>
                <Link to="/genre/science-fiction">Science Fiction</Link>
                <Link to="/genre/thriller">Thriller</Link>
                <Link to="/genre/war">War</Link>
                <Link to="/genre/western">Western</Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/release">
                Release
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/top50">
                Top 50
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">
                My watchlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
