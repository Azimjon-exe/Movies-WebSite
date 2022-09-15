import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "panda",
    type: "all",
  };
  handelKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  hendlefilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="col s12">
          <div className="input-field ">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handelKey}
            />
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.searchMovie(this.state.search, this.state.type)
              }
            >
              Search Movies
            </button>
          </div>
        </div>
        <div>
          <label>
            <input
              class="with-gap"
              name="group3"
              type="radio"
              data-type="all"
              onChange={this.hendlefilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
              onChange={this.hendlefilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="group3"
              type="radio"
              data-type="series"
              onChange={this.hendlefilter}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
