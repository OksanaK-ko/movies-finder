import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";
import Cast from "./views/Cast";
import Rewiews from "./views/Reviews";

const App = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
    <Route path="/movies/:movieId" component={MoviesDetailsPage} />
    <Route path="/movies/:movieId/cast" component={Cast} />
    <Route path="/movies/:movieId/reviews" component={Rewiews} />
  </>
);

export default App;
