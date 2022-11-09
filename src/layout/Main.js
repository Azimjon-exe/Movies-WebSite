import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=8b1d8865&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=8b1d8865&s=panda")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Search searchMovie={searchMovies} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}

export default Main;
