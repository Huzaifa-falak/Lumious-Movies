import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        {/* Animated 404 Text */}
        <div className="error-code">
          <span className="code-digit">4</span>
          <span className="code-digit spin">0</span>
          <span className="code-digit">4</span>
        </div>

        {/* Error Message */}
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist. It might have been removed or the URL could be incorrect.
        </p>

        {/* Movie Themed Icon */}
        <div className="movie-icon">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="25" width="70" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="30" cy="40" r="3" fill="currentColor"/>
            <circle cx="50" cy="40" r="3" fill="currentColor"/>
            <circle cx="70" cy="40" r="3" fill="currentColor"/>
            <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-primary" onClick={() => navigate('/')}>
             Go to Home
          </button>
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>

        //* Quick Links *
        <div className="quick-links">
          <p>Quick Navigation:</p>
          <div className="links-grid">
            <a href="/" className="quick-link">Home</a>
            <a href="/tv-shows" className="quick-link">TV Shows</a>
            <a href="/trending" className="quick-link">Trending</a>
            <a href="/watchlist" className="quick-link">My Watchlist</a>
          </div>
        </div>
      </div>

     {/* //background animations */}
      <div className="background-animation">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default NotFound;
