import "./Skeleton.css";

const MovieCardSkeleton = () => {
  return (
    <div className="movie-skeleton card bg-dark text-white">

      <div className="skeleton-image shimmer"></div>

      <div className="card-body">

        <div className="skeleton-line shimmer w-75"></div>
        <div className="skeleton-line shimmer w-50"></div>

      </div>

    </div>
  );
};

export default MovieCardSkeleton;