import React from "react";

import styles from "./HomeHeroText.module.css";

const HomeHeroText = () => {
  return (
    <div className="lg:mt-45 mt-30">
      <div className="typeWriter-container">
        <div
          className={`sm:mt-5 mt-2 text-center lg:text-[1.2rem] text-[1rem] font-[font4] ${styles.typeWriter}`}
        >
          Full-stack Developer
        </div>
      </div>

      <div
        className={`mt-1 text-center lg:text-[4rem] sm:text-[2.5rem] text-[2rem] font-[font3] uppercase `}
      >
        <span className="text-[3.6rem] font-[font7]">
          Crafting{" "}
          <span className={`text-[4.5rem] font-[font2] ${styles.heading}`}>
            {" "}
            Seamless Design{" "}
          </span>{" "}
          & <br /> High-Performance Web Experiences{" "}
        </span>
      </div>
      <div className="w-[100%]">
        <p className="mt-3 text-center sm:mt-5 lg:ml-15 ml-10 lg:text-[18px] sm:text-[15px] text-[15px] font-[font6] lg:mr-0 mr-[20px] text-[#b3b3b3]">
          <span>
            Turning Core Computer Science Principles into Efficient, Secure,
            Modular Solutions.
            <br /> And Focused on Efficient API Design & Responsive Interfaces.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomeHeroText;
