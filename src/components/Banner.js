import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import axios from "../api/axios";
import styled from "styled-components";

function Banner() {
  const [movie, setMovie] = useState(null); // 단일 영화 객체
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const request = await axios.get(requests.fetchNowPlaying);
      const movies = request.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const movieId = movies[randomIndex]?.id;

      if (movieId) {
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
          params: { append_to_response: "videos" },
        });
        setMovie(movieDetail);
      }
    } catch (error) {
      console.error("영화 정보를 가져오는데 실패했습니다:", error);
    }
  };

  if (!movie) return null;

  const trailerKey = movie.videos?.results?.find(
    (video) => video.site === "YouTube"
  )?.key;

  if (!isClicked) {
    return (
      <header
        className="relative w-full h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full w-full flex flex-col justify-center items-start px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="flex space-x-4 mb-4">
            <button
              className="bg-white text-black px-6 py-2 text-lg font-semibold rounded hover:bg-gray-300 transition"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 text-lg font-semibold rounded hover:bg-gray-500 transition">
              More Information
            </button>
          </div>
          <p className="text-sm max-w-lg line-clamp-3">
            {movie.overview || ""}
          </p>
        </div>
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen;"
            allowFullScreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Banner;
