import React, { useState, useEffect } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white ${
        show ? "shadow-lg" : ""
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <img
          src="https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg"
          alt="tving logo"
          className="h-8 cursor-pointer"
          onClick={() => window.location.reload()}
        />

        {/* 메뉴 */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/series" className="hover:text-red-500">
            시리즈
          </a>
          <a href="/entertainment" className="hover:text-red-500">
            예능
          </a>
          <a href="/movies" className="hover:text-red-500">
            영화
          </a>
          <a href="/live" className="hover:text-red-500">
            라이브
          </a>
          <a href="/sports" className="hover:text-red-500">
            스포츠
          </a>
          <a href="/anime" className="hover:text-red-500">
            애니
          </a>
        </div>

        {/* 오른쪽 컨테이너 */}
        <aside className="flex items-center space-x-4">
          <button className="text-sm px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
            찾기
          </button>
          <img
            src="https://image.tving.com/upload/profile/IG00000001_IMAGE_2.png/dims/resize/100"
            alt="user logged"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </aside>
      </div>
    </nav>
  );
}

export default Nav;
