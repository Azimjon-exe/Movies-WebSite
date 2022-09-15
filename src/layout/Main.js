import React from "react";
import Movies from "../components/Movies";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=8b1d8865&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    return (
      <div className="container content">
        {this.state.movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <h1>loading....</h1>
        )}
      </div>
    );
  }
}

export default Main;
