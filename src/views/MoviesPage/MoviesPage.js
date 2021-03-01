import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import s from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    moviesName: "",
    moviesParam: [],
  };

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ moviesName: value.toLowerCase() });
  };

  loadMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0516dd3e6a153d51192e61dfe30410f4&language=en-US&page=1&include_adult=true&query=${this.state.moviesName}`
    )
      .then((res) => res.json())
      .then((movies) => this.setState({ moviesParam: movies.results }));
  };

  render() {
    console.log(this.props.match.url);
    const { location } = this.props;
    return (
      <>
        <h1>Movies page</h1>
        <div className={s.SearchForm}>
          <input
            className={s.SearchForm_input}
            type="text"
            placeholder="Search movies"
            value={this.state.moviesName}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={this.loadMovie}
            className={s.SearchForm_button}
          >
            <span className={s.SearchForm_button_label}>Search</span>
          </button>
        </div>
        <ul>
          {this.state.moviesParam.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(MoviesPage);
