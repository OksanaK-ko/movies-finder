import React, { Component } from "react";
import axios from "axios";

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0516dd3e6a153d51192e61dfe30410f4`
    );
    console.log(response.data);

    this.setState({ ...response.data });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  render() {
    const { results } = this.state;
    return (
      <>
        {results.length > 1 && (
          <ul>
            {this.state.results.map((result) => (
              <li key={result.id}>
                Author:{result.author}
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        )}
        {results.length === 0 && (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
