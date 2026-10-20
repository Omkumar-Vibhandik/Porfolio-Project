import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TimeClock from "./TimeClock";

const HomeBottomText = () => {
  return (
    <div className="w-full h-full relative px-2 sm:px-6 lg:px-12 mt-8 sm:mt-12">
      {/* Desktop/Tablet Layout */}
      <div className="hidden sm:flex absolute left-0 top-0 flex-col items-center gap-8 sm:gap-10 md:gap-6 p-2 md:mt-7">
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7 mb-4">
          <a
            href="https://github.com/Omkumar-Vibhandik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-13 md:h-14  hover:text-[#FF7A30] transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/omkumar-vibhandik-530244389/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-13 md:h-14 hover:text-[#FF7A30] transition-colors duration-200" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-20 hover:text-[#FF7A30] transition-colors duration-200" />
          </a>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="border-3 rounded-full flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 hover:border-[#FF7A30] hover:text-[#FF7A30] transition-colors duration-200 text-[15px] sm:text-[17px] md:text-[26px]">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="border-3 rounded-full flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 hover:border-[#FF7A30] hover:text-[#FF7A30] transition-colors duration-200 text-[15px] sm:text-[17px] md:text-[26px]">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet TimeClock */}
      <div className="hidden sm:flex absolute right-0 bottom-0 m-6 items-end justify-end text-[1.3rem] sm:text-[1.6rem] md:text-[2rem]">
        <TimeClock />
      </div>

      {/* Mobile Layout: stacked column */}
      <div className="flex sm:hidden flex-col items-center justify-center w-full h-full pt-8 gap-4 mt-1">
        <div className="flex items-center gap-5 mb-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-13 h-12 hover:text-[#FF7A30] transition-colors duration-200" />
          </a>
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-13 h-13 hover:text-[#FF7A30] transition-colors duration-200" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="w-14 h-15 hover:text-[#FF7A30] transition-colors duration-200" />
          </a>
        </div>
        <div className="flex flex-col gap-5 w-full items-center">
          <div className="border-3 rounded-full flex items-center px-4 py-2 hover:border-[#FF7A30] hover:text-[#FF7A30] transition-colors duration-200 text-[20px]">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="border-3 rounded-full flex items-center px-4 py-2 hover:border-[#FF7A30] hover:text-[#FF7A30] transition-colors duration-200 text-[20px]">
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="mt-3 mb-4 text-[1.1rem]">
          <TimeClock />
        </div>
      </div>
    </div>
  );
};

export default HomeBottomText;
