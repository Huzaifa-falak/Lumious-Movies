import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {

  return (

    <section className="privacy-page">

      <div className="container">

       
        <div className="privacy-header">

          <h1>
            Privacy Policy
          </h1>

          <p>
            Your privacy is important to us at
            Luminous Movies.
          </p>

        </div>

      
        <div className="privacy-content">

          <div className="privacy-card">

            <h3>
              Information Collection
            </h3>

            <p>
              Luminous Movies does not require account
              registration to browse movies and TV shows.
              Limited anonymous analytics may be collected
              to improve the platform experience.
            </p>

          </div>

          <div className="privacy-card">

            <h3>
              Cookies
            </h3>

            <p>
              We may use cookies to improve performance,
              remember preferences, and enhance navigation.
            </p>

          </div>

          <div className="privacy-card">

            <h3>
              Third-Party Services
            </h3>

            <p>
              Some content data, posters, and trailers
              are provided through third-party APIs
              such as TMDB.
            </p>

          </div>

          <div className="privacy-card">

            <h3>
              Data Security
            </h3>

            <p>
              We strive to maintain a secure browsing
              experience and protect user interactions.
            </p>

          </div>

          <div className="privacy-card">

            <h3>
              Policy Updates
            </h3>

            <p>
              This privacy policy may be updated periodically
              without prior notice.
            </p>

          </div>

        </div>

      </div>

    </section>

  );

};

export default PrivacyPolicy;