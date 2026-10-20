import React from "react";
import TimeClock from "../Home/TimeClock";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
// This is the single-file React component for the footer.
// All components, logic, and styling are included here.
// Tailwind CSS is used for styling.
const App = () => {
  return (
    <div className="flex flex-col mt-[200px] items-center justify-center  text-gray-300 font-sans py-12 px-4 space-y-8 min-h-[160px] min-w-screen float-end ">
      {/* Container for the entire footer to match the style of the first image */}
      <footer className="w-full max-w-3xl text-center ">
        <hr className="mb-[15px] text-[#5b5853]" />
        {/* Links section */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base mb-6 ">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Jobs
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Press
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Accessibility
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Partners
          </a>
        </div>

        {/* Social media icons section */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          {/* Email Icon */}
          <a
            href="https://mail.google.com/"
            target="blank"
            className="text-xl md:text-2xl hover:text-white transition-colors duration-200"
          >
            <MdOutlineMail />
          </a>

          {/* Document Resume Icon */}
          <a
            href="/public/Omkumar Cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-white transition-colors duration-200"
          >
            <IoDocumentTextOutline />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Omkumar-Vibhandik"
            target="blank"
            className="text-xl md:text-2xl hover:text-white transition-colors duration-200"
          >
            <FaGithub />
          </a>

          {/*Linkedin Icon */}
          <a
            href="https://www.linkedin.com/in/omkumar-vi/?isSelfProfile=true"
            target="blank"
            className="text-xl md:text-2xl hover:text-white transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright section */}
        <p className="text-sm md:text-base text-gray-400">
          © 2025 Created By Omkumar Vibhandik, All rights reserved.
        </p>
        {/* <TimeClock /> */}
      </footer>
    </div>
  );
};

export default App;
