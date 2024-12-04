import React, { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalIsOpen,
}) {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalIsOpen(false);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Modal Container */}
      <div
        ref={ref}
        className="modal-container relative bg-black text-white rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
        >
          X
        </button>

        {/* Modal Content */}
        <div>
          {/* Image Section */}
          <img
            className="w-full h-90 object-cover"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal_poster_img"
          />

          {/* Text Content */}
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-2">
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="text-2xl font-bold mb-4">{title ? title : name}</h2>
            <p className="text-gray-400 mb-2">평점: {vote_average}</p>
            <p className="text-sm text-gray-300">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
