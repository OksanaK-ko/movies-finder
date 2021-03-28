import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import getQueryParams from "../../utils/get-query-params";
import Searchbox from "../../components/Searchbox/Searchbox";
import axios from "axios";
// import {fetch} from "../../services/fetchApi";
// import s from "./MoviesPage.module.css";
class MoviesPage extends Component {
  state = {
    moviesName: "",
    moviesParam: [],
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=0516dd3e6a153d51192e61dfe30410f4&
           language=en-US&page=1&include_adult=true&query=${query}`
        )
        .then((response) =>
          this.setState({ moviesParam: response.data.results })
        )
        .catch((error) => {
          console.error(error);
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=0516dd3e6a153d51192e61dfe30410f4&
           language=en-US&page=1&include_adult=true&query=${nextQuery}`
        )
        .then((response) =>
          this.setState({ moviesParam: response.data.results })
        )
        .catch((error) => {
          console.error(error);
        });
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    console.log(this.props.match.url);
    const { location } = this.props;
    return (
      <>
        <h1>Movies page</h1>
        <Searchbox onSubmit={this.handleChangeQuery} />
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
