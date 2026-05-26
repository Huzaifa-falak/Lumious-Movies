
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-5">

      <div className="container">

        <div className="row">

         
          <div className="col-lg-4 col-md-3 mb-4">
            <h2 className="custom-h2">Luminous Movies</h2>

            <p className="text-secondary">
              Luminous Movies is a streaming directory that connects you to quality movies and TV shows from trusted sources.  
              We're committed to keeping the experience completely ad-free so you can watch without interruptions.  
              Always make sure you're on the real site to stay safe from copycats.
            </p>
          </div>

          
          <div className="col-lg-3 col-md-3 mb-4">
            <h5 className="text-white mb-3">Links</h5>

            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="text-secondary text-decoration-none">Movies</Link></li>
              <li><Link to="/tvshows" className="text-secondary text-decoration-none">TV Shows</Link></li>
              <li><Link to="/genres" className="text-secondary text-decoration-none">Genres</Link></li>
              <li><Link to="/release" className="text-secondary text-decoration-none">Release</Link></li>
              <li><Link to="/top50" className="text-secondary text-decoration-none">Top50</Link></li>
              <li><Link to="/watchlist" className="text-secondary text-decoration-none">My watchlist</Link></li>
              
            </ul>
          </div>

         
          <div className="col-lg-2 col-md-3 mb-4">
            <h5 className="text-white mb-3">Social</h5>

            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Discord</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Telegram</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Twitter</a></li>
            </ul>
          </div>

         
          <div className="col-lg-3 col-md-3 mb-4">
            <h5 className="text-white mb-3">Legal</h5>

            <ul className="list-unstyled">
              <li><Link to="/terms" className="text-secondary text-decoration-none">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-secondary text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/dmca" className="text-secondary text-decoration-none">DMCA</Link></li>
            </ul>
          </div>

        </div>

        
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="text-secondary mb-0">
            © {new Date().getFullYear()} Luminous Movies. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;