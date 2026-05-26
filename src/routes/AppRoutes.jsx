import { Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";

import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Watchlist from "../pages/Watchlist/Watchlist";
import TVShows from "../pages/TVShows/TVShows";
import TVDetails from "../pages/TVDetails/TVDetails";
import Seasons from "../pages/Seasons/Seasons";
import Episodes from "../pages/Episodes/Episodes";
import GenrePage from "../pages/GenrePage/GenrePage";
import Releases from "../pages/Releases/Releases";
import Top50 from "../pages/Top50/Top50";
import Auth from "../pages/Auth/Auth";
import Terms from "../pages/Terms/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import DMCA from "../pages/DMCA/DMCA";
import NotFound from "../pages/NotFound/NotFound";


const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/tv/:id" element={<TVDetails />} />
        <Route path="/tv/:id/seasons" element={<Seasons />} />
        <Route path="/tv/:id/season/:seasonNumber"  element={<Episodes />} />
        <Route  path="/genre/:slug" element={<GenrePage />} />
        <Route path="/release" element={<Releases />} />
        <Route path="/top50" element={<Top50 />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/dmca" element={<DMCA />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default AppRoutes;