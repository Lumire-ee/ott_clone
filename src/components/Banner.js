import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import axios from "../api/axios";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const selectedMovies = request.data.results.slice(0, 7);
    setMovie(selectedMovies);

    // const movieId =
    //   request.data.results[
    //     Math.floor(Math.random() * request.data.results.length)
    //   ].id;

    // const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
    //   params: { append_to_response: "videos" },
    // });
    // setMovie(movieDetail);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movie.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movie.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <header className="relative w-full h-[400px] overflow-hidden">
        {/* 영화 배너 */}
        {movie.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700
               ${
                 index === currentIndex ? "translate-x-0" : "translate-x-full"
               } ${index < currentIndex ? "-translate-x-full" : ""}`}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* 배너 내용 */}
            <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full w-full flex flex-col justify-center items-start px-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                {movie.title || movie.name || movie.original_name}
              </h1>
              <p className="text-sm max-w-lg line-clamp-3">
                {movie.overview || movie.overview_en}
              </p>
            </div>
          </div>
        ))}
        {/* 슬라이드 버튼 */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        {/* 버튼 */}
        <div className="absolute bottom-4 right-8 flex space-x-2">
          {movie.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </header>
    </>
  );
}

export default Banner;
