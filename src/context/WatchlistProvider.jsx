import {
  useEffect,
  useState,
} from "react";

import {
  WatchlistContext,
} from "./WatchlistContext";

const WatchlistProvider = ({
  children,
}) => {

  const [watchlist, setWatchlist] =
  useState(() => {

    const stored =
      localStorage.getItem("watchlist");

    return stored
      ? JSON.parse(stored)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist)
    );

  }, [watchlist]);

  // ADD MOVIE

  const addToWatchlist = (movie) => {

    const exists = watchlist.find(
      (item) => item.id === movie.id
    );

    if (!exists) {

      setWatchlist([
        ...watchlist,
        movie,
      ]);

    }

  };

  // REMOVE MOVIE

  const removeFromWatchlist = (id) => {

    setWatchlist(
      watchlist.filter(
        (movie) => movie.id !== id
      )
    );

  };

  // CHECK EXISTS

  const isInWatchlist = (id) => {

    return watchlist.some(
      (movie) => movie.id === id
    );

  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
      }}
    >

      {children}

    </WatchlistContext.Provider>

  );

};

export default WatchlistProvider;