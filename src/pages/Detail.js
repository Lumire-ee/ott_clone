import axios from "../api/axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { movieId } = useParams();
  const [movie, setmovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setmovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie)
    return <div className="text-center text-white mt-20">...Loading</div>;

  return (
    <section
      className="relative pt-20 h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">{movie.release_date}</p>
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <p className="text-gray-400 mb-2">평점: {movie.vote_average}</p>
        <p className="text-sm text-gray-300">{movie.overview}</p>
      </div>
    </section>
  );
}

export default Detail;
