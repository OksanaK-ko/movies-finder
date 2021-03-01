import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import routes from "./routes";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);
const MoviesDetailsPage = lazy(() =>
  import(
    "./views/MoviesDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-detailes-page" */
  )
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
