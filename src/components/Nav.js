import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?query=${e.target.value}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white ${
        show ? "shadow-lg opacity-80" : ""
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix logo"
          className="h-8 cursor-pointer"
          onClick={() => window.location.reload()}
        />
        {/* 검색폼 */}
        <input
          value={searchValue}
          onChange={handleChange}
          className="bg-gray-700 text-white text-sm placeholder-gray-400 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          type="text"
          placeholder="영화를 검색해주세요"
        />

        {/* 오른쪽 컨테이너 */}
        <aside className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user logged"
            className="w-8 h-8 cursor-pointer"
          />
        </aside>
      </div>
    </nav>
  );
}

export default Nav;
