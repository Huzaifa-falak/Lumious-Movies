import "./TrailerModal.css";

import YouTube from "react-youtube";

const TrailerModal = ({
  show,
  onClose,
  trailerKey,
}) => {

  if (!show) return null;

  return (

    <div className="trailer-modal">

      <div className="trailer-content">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <YouTube
          videoId={trailerKey}
          opts={{
            width: "100%",
            height: "500",
            playerVars: {
              autoplay: 1,
            },
          }}
        />

      </div>

    </div>
  );
};

export default TrailerModal;