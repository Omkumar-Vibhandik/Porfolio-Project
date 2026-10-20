import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`w-full z-20`} style={{ position: "relative" }}>
      {/* Mobile/Tablet Navbar Row */}
      <div
        className={`md:hidden flex flex-row items-center justify-between w-full px-2 py-2 `}
      >
        <div className="flex flex-row items-center gap-3 mr-25 mb:mr-0">
          <div className={`h-[32px] w-[32px] ${styles.textAnime}`}>
            <img
              src="./src/assets/logo.png"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <h1
            className={`text-white font-[font5] text-[20px] ${styles.textAnime2} whitespace-nowrap`}
          >
            OM's-Portfolio
          </h1>
        </div>
        <button
          className={`${styles.mobileMenuButton}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span style={{ fontSize: "2rem", color: "#fff" }}>
            {menuOpen ? "\u2715" : "\u2630"}
          </span>
        </button>
      </div>

      {/* Desktop Menu (unchanged design) */}
      <div className="hidden md:flex flex-row items-center justify-between md:px-4 md:py-2 -mt-2 w-full">
        <div className="flex flex-row items-center min-w-0 -mt-20">
          <div className="md:h-[170px] h-[60px] flex items-center">
            <div
              className={`lg:h-[65px] h-[40px] lg:w-[55px] w-[40px] -mt-4 pt-3 ${styles.textAnime}`}
            >
              <img
                src="./src/assets/logo.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h1
              className={`text-white hover:text-blue-600 ml-3 font-[font5] lg:text-[33px] text-[18px] ${styles.textAnime2} whitespace-nowrap`}
            >
              OM's-Portfolio
            </h1>
          </div>
        </div>
        <div className="h-[200px] w-[65%] -mt-5 -mr-3 ml-[60px] float-right text-black text-center text-[40px] font-[font2] flex">
          <div className="bg-[#b1a996] w-[30%] h-[70px] items-center flex justify-center">
            <Link to="/"> Home</Link>
          </div>
          <div className="bg-[#E8DFCA] w-[45%] ml-[3px] h-[120px] p-6 flex items-center justify-center">
            <Link to="/about"> About</Link>
          </div>
          <div className="bg-[#9d9684] w-[30%] ml-[3px] h-[160px] p-6 pt-10 flex items-center justify-center">
            <Link to="/projects" className=" mt-1">
              {" "}
              Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (like Navbar.jsx) */}
      {menuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full bg-black/95 z-30 shadow-lg text-center">
          <div className="flex flex-col items-center px-4 pt-2 pb-3 space-y-2">
            <Link
              to="/"
              className="block w-full text-white hover:text-[#ff9900] transition-colors duration-300 border-b border-gray-700 py-3 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block w-full text-white hover:text-[#ff9900] transition-colors duration-300 border-b border-gray-700 py-3 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block w-full text-white hover:text-[#ff9900] transition-colors duration-300 border-b border-gray-700 py-3 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NewNavbar;
