import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Actors from "../../components/Actors/Actors";
import Reviews from "../../components/Reviews/Reviews";
import s from "./MovieDetailsPage.module.css";
class MoviesDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    release_date: "",
    overview: null,
    genres: [],
    vote_average: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0516dd3e6a153d51192e61dfe30410f4`
    );
    // console.log(response.data);

    this.setState({ ...response.data });

    const { location } = this.props;
    const locationFrom = location?.state?.from ? location.state.from : null;
    this.setState({ locationFrom });
  }
  handleGoBack = () => {
    const { history } = this.props;
    const { locationFrom } = this.state;
    history.push(locationFrom || "/");
  };
  render() {
    console.log(this.props.match.url);
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state;
    const { match } = this.props;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.Section}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
          <div className={s.SectionDetails}>
            <h1>
              {title}({release_date.slice(0, 4)})
            </h1>
            <p>{vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={s.Genres}>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.About}>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to={`${match.url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Route path={`${match.path}/cast`} component={Actors} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </div>
      </>
    );
  }
}

export default MoviesDetailsPage;
