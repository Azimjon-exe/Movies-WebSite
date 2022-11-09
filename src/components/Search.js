import React, { useState } from "react";

export default function Search(props) {
  const { searchMovie } = props;

  const [search, setSearch] = useState("panda");
  const [type, setType] = useState("all");

  const handelKey = (e) => {
    if (e.key === "Enter") {
      searchMovie(search, type);
    }
  };

  const hendlefilter = (e) => {
    setType(e.target.dataset.type);
    searchMovie(search, e.target.dataset.type);
  };

  return (
    <div>
      <div className="col s12">
        <div className="input-field ">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handelKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovie(search, type)}
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
            onChange={hendlefilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="group3"
            type="radio"
            data-type="movie"
            onChange={hendlefilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            class="with-gap"
            name="group3"
            type="radio"
            data-type="series"
            onChange={hendlefilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}
