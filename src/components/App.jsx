import {
  Routes,
  Route,
} from "react-router-dom";
import MovieDetailsPage from "./FilmPage/FilmPage";
import HomePage from "./HomePage/HomePage";
import NoveltiesPage from "./NoveltiesPage/NoveltiesPage";

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<HomePage />}>
       
      </Route>
       <Route path="novelties" element={<NoveltiesPage />}>
      </Route>
                <Route path="novelties/:filmId" element={<MovieDetailsPage />} />

    </Routes>
  );
};
