import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import requests from "../app/request";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    };
    fetchData();
  }, []);
  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
    >
      <div className="banner_container">
        <h1 className="banner_tittle">
          {movie.name || movie.original_name || movie.title}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <p className="banner_description">{truncate(movie?.overview, 100)}</p>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
};

export default Banner;
