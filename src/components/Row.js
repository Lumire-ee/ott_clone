import axios from "../api/axios";
import React, { useState, useEffect, useRef } from "react";
import MovieModal from "./MovieModal";

function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [movieIsSelected, setMovieIsSelected] = useState({});
  const rowRef = useRef(null);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  useEffect(() => {
    fetchMovieData();
    console.log(rowRef.current);
    if (rowRef.current) {
      console.log(rowRef.current.scrollWidth);
      console.log(rowRef.current.clientWidth);
    }
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = isLargeRow ? 400 : 300;
    if (rowRef.current) {
      if (direction === "left") {
        rowRef.current.scrollBy
          ? rowRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
          : (rowRef.current.scrollLeft -= scrollAmount);
      }
    } else {
      rowRef.currentScrollBy
        ? rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        : (rowRef.current.scrollLeft += scrollAmount);
    }
  };

  const handleClick = (movie) => {
    setModalIsOpen(true);
    setMovieIsSelected(movie);
  };

  return (
    <div className="mb-8 row-container">
      <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
      <div className="relative">
        {/* 슬라이드 버튼 */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
          onClick={() => handleScroll("left")}
        >
          &#10094;
        </button>
        <div
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4"
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`flex-none ${
                isLargeRow ? "w-64 h-96" : "w-40 h-60"
              } relative group`}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title || movie.name}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                onClick={() => handleClick(movie)}
              />
              {/* "오늘의 TOP20"에만 순서 추가 */}
              {isLargeRow && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  {index + 1}
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
          onClick={() => handleScroll("right")}
        >
          &#10095;
        </button>
      </div>

      {modalIsOpen && (
        <MovieModal {...movieIsSelected} setModalIsOpen={setModalIsOpen} />
      )}
    </div>
  );
}

export default Row;
