import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import { GrContactInfo } from "react-icons/gr";

export default function Navbar({ refs }) {
  const [isOpen, setIsOpen] = useState(false);
  // for handling scroll event and changing navbar background color on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      // Trigger border when user scrolls down more than 30px
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        top: isScrolled ? 16 : 0, // Moves down from top: 0 to top: 16px (top-4)
        width: isScrolled ? "60%" : "90%", // Shrinks horizontally
        maxWidth: isScrolled ? "1152px" : "100%", // Restricts max width (max-w-6xl)
        borderRadius: isScrolled ? "16px" : "0px", // Rounds corners
      }}
      transition={{
        type: "tween",
        stiffness: 200,
        damping: 24,
        mass: 0.8,
      }}
      className={`fixed left-0 right-0 z-50 mx-auto px-6 ${
        isScrolled
          ? " backdrop-blur-lg border border-b border-gray-700/60 shadow-sm py-3 px-6 top-5 max-w-6xl w[92%] rounded-3xl"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex justify-between items-center h-16 w-full">
        {/* Logo */}
        <div className="flex flex-wrap items-center ">
          <a href="/" className="flex items-center">
            <div
              className={`lg:h-[34px] h-[30px] lg:w-[35px] w-[30px] mt-[5px] ${styles.textAnime}`}
              style={{ minWidth: 30 }}
            >
              <img
                src="./src/assets/logo.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h1
              className={`text-white hover:text-blue-600 mt-[5px] ml-[10px] font-[font2] uppercase lg:text-[20px] text-[17px] ${styles.textAnime2}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Portfolio
            </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <button
                onClick={() => scrollToSection(refs.heroRef)}
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.aboutRef)}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.projectsRef)}
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button className="hover:text-blue-400 transition-colors">
                <a
                  href="/public/Omkumar Cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Resume
                </a>
              </button>
            </li>
          </ul>
        </div>
        {/* Contact Pill Button */}
        <div
          onClick={() => scrollToSection(refs.contactRef)}
          className="hidden sm:flex flex-wrap items-center rounded-full gap-2 md:gap-2 md-none bg-white px-4 py-2cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
        >
          <div className="*:text-black mt-[5px] uppercase lg:text-[23px] text-[22px] p-1 cursor-pointer transition-colors duration-300">
            <GrContactInfo />
          </div>
          <h1
            onClick={() => scrollToSection(refs.contactRef)}
            className={`text-black hover:text-blue-600 mt-[5px] ml-[2px] cursor-pointer font-[font8] uppercase lg:text-[14px] text-[20px] $`}
            style={{ whiteSpace: "nowrap" }}
          >
            Contact
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white-700 hover:text-blue-600 focus:outline-none text-lg font-semibold px-2 py-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <span>&#10005; {/* X icon */}</span>
            ) : (
              <span>&#9776; {/* Hamburger icon */}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-black/95 fixed top-16 left-0 w-full min-h-[180px] shadow-lg text-center z-30"
        >
          <div className="px-4 pt-2 pb-3 space-y-2 flex flex-col items-center">
            <a
              href="#home"
              className="block w-full text-white-700 hover:text-blue-600 transition-colors duration-300 border-b border-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block w-full text-white-700 hover:text-blue-600 transition-colors duration-300 border-b border-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block w-full text-white-700 hover:text-blue-600 transition-colors duration-300 border-b border-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#projects"
              className="block w-full text-white-700 hover:text-blue-600 transition-colors duration-300 border-b border-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#resume"
              className="block w-full text-white-700 hover:text-blue-600 transition-colors duration-300 border-b border-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
