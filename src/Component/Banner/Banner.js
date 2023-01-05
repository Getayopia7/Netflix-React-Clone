import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import request from "../../requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let axiosdata=request.fetchNetflixOriginals
      const req = await axios.get(axiosdata);
      // console.log(req);
      setMovie(req?.data.results[Math.floor(Math.random() * req.data.results.length)]);
      // console.log(req?.data.results[Math.floor(Math.random() * req.data.results.length)])
      return req;
    }
    fetchData();
  }, []);
    console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button"><a hreff="https://www.netflix.com/watch/">play</a></button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
  