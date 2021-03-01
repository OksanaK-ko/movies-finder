import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=9b8af6d9c7bced78f94ac4d2985f0966"
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
