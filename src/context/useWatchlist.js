import { useContext } from "react";

import {
  WatchlistContext,
} from "./WatchlistContext";

export const useWatchlist = () =>
useContext(WatchlistContext);