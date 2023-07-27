import React, { useEffect, useState } from "react";
import "../src/Row.css";
import axios from "./axios";
import { Link } from "react-router-dom";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <div key={movie.id}>
                <Link to={`/video/${movie.id}`}>
                  <img
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    onClick={() => setMovies(movie.id)}
                  />
                </Link>
                {/* Other content for each movie card */}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
