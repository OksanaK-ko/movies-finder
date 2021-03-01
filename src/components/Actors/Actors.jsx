import React, { Component } from "react";
import axios from "axios";

class Actors extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0516dd3e6a153d51192e61dfe30410f4`
    );
    // console.log(response.data);

    this.setState({ ...response.data });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={`${actor.name}`}
              />
              {actor.name}
              <p>Character:{actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Actors;
