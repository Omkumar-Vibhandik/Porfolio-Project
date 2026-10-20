import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NewNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile / Tablet header (only shown on md-) */}
      <div className="md:hidden bg-black/0">
        <div
          className={`flex items-center justify-between w-full px-3 py-3 ${styles.bg}`}
        >
          <div className="flex items-center gap-3">
            <div className={`h-[32px] w-[32px] ${styles.textAnime}`}>
              <img
                src="./src/assets/logo.png"
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div
              className={`${styles.textAnime2} text-white font-[font5] text-[18px] whitespace-nowrap`}
            >
              OM's-Portfolio
            </div>
          </div>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span style={{ fontSize: "1.8rem", color: "#fff" }}>
              {open ? "\u2715" : "\u2630"}
            </span>
          </button>
        </div>

        {open && (
          <div className="fixed top-[56px] left-0 w-full bg-black/95 z-30 shadow-lg text-center">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <Link
                to="/"
                className="block text-white hover:text-[#ff9900] transition-colors duration-300 py-3"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-[#ff9900] transition-colors duration-300 py-3"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-white hover:text-[#ff9900] transition-colors duration-300 py-3"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop navbar (unchanged) */}
      <div className="hidden md:block">
        <div
          id="navbar"
          className={`bg-[#FCFCF9] ${styles.navbarColor} w-full`}
        >
          <div id="logo" className="flex ">
            <div className="h-[250px] w-[35%] mt-5 ml-3">
              <div className=" h-[170px] w-[100%] ">
                <div
                  className={`lg:h-[50px] h-[30px] lg:w-[50px] w-[30px] mt-[10px] pt-3 ${styles.textAnime}`}
                >
                  <img src="./src/assets/logo.png" alt="" />
                </div>
                <h1
                  className={`text-black hover:text-blue-600 mt-[5px] ml-[10px] font-[font5] lg:text-[35px] text-[20px] ${styles.textAnime2}`}
                >
                  OM's-Portfolio
                </h1>
              </div>
            </div>
            <div className="h-[200px] w-[65%] ml-[60px] float-right flex text-black text-center text-[40px] font-[font2]">
              <div
                className={`bg-[#5AB2FF] w-[30%] h-[70px] items-center ${styles.hoverEffect} ${styles.boxNav}`}
              >
                <Link to="/">
                  <span> Home</span>{" "}
                </Link>
              </div>
              <div
                className={`bg-[#1947a2] w-[45%] ml-[3px] h-[120px] p-6 ${styles.hoverEffect} ${styles.boxNav}`}
              >
                <Link to="/about">
                  <span>About </span>
                </Link>
              </div>
              <div
                className={`bg-[#0D92F4] w-[30%] ml-[3px] h-[160px] p-6 pt-10 ${styles.hoverEffect} ${styles.boxNav}`}
              >
                <Link to="/projects" className=" mt-1">
                  {" "}
                  <span>Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
