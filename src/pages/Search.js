import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useDebounce from "../hooks/useDebounce";

function Search() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("query");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (debouncedSearchTerm) => {
    console.log(debouncedSearchTerm);

    try {
      const request = await axios.get(
        `search/multi?include_adult=false&query=${debouncedSearchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="pt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div
                key={movie.id}
                onClick={() => navigate(`/${movie.id}`)}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={movieImageUrl}
                  alt="movie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="pt-20 flex flex-col items-center justify-center h-screen text-center">
        <div className="text-gray-400 text-lg">
          <p>
            찾고자 하는 검색어{" "}
            <span className="text-white font-semibold">{`"${searchTerm}"`}</span>
            에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

export default Search;
