import React, { useState, useEffect } from "react";

function Nav() {
  const [show, setShow] = useState(false);

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
