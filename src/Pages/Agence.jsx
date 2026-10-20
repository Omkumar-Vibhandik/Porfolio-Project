import React, { useRef } from "react";
import styles from "../Components/agence/agence.module.css";
import SkillsGrid from "../Components/agence/techStack";
import styles2 from "../Pages/Agence.module.css";
const Agence = () => {
  return (
    <>
      <div className=" h-[150px] md:w-[100%] w-1/2 ml-4 ">
        <div className={`${styles2.aboutContainer} `}>
          <h1 className={`${styles2.aboutText}`}>
            <span className={`${styles2.aboutBold} font-[font2]`}>About</span>{" "}
            <span className={`${styles2.aboutLight} font-[font7]`}>me</span>
          </h1>
          <div className={`${styles2.aboutLine}`}></div>
        </div>
      </div>
      <div className="flex mt-8 md:mt-30 items-center justify-center relative md:ml-10 ml-2 md:mr-[200px] font-[font8]">
        <div className="h-auto md:h-[50vh] w-full text-[20px] md:text-[20px] md:ml-[150px] mt-15 md:mt-10 px-2 md:px-2 text-center md:text-center text-[#b3b3b3]">
          <p>
            Software Developer with expertise in full-stack web development and
            core computer science fundamentals. Proven ability to construct
            scalable web applications featuring custom authentication, REST API
            integrations, and cloud hosting. Proficient across the MERN stack
            (MongoDB, Express, React, Node.js),Basic of C++, and Java, with
            strong knowledge of software development life cycles (SDLC), version
            control (Git/GitHub), and relational/non-relational database
            management. Eager to contribute technical skills and collaborative
            problem-solving to an innovative engineering team. learning and
            growing as a professional developer.
          </p>
        </div>
      </div>

      <div className="relative mt-[90px] md:mt-[60px]">
        <div className="text-center items-center justify-center mt-10 md:mt-20">
          <h2 className=" md:ml-10 ml-32 md:text-[30px] text-[23px] font-[font8] text-[#b3b3b3]">
            My Name is
          </h2>
          <h1
            className={`md:ml-5 ml-20 mt-5 font-[font2] md:text-[70px] text-[30px] uppercase md:${styles.auroraHeading}`}
          >
            Omkumar Sanjay Vibhandik
          </h1>
        </div>
        {/* <div className={`${styles2.aboutLine}`}></div> */}
        <div className="mt-[35px] flex flex-col md:flex-row w-full ">
          <div className="w-full md:w-[full] ">
            <p className="relative text-[17px] md:text-[22px] font-[font8] ml-2 md:ml-55 mr-2 md:mr-15 text-[#b3b3b3] mt-3 md:mt-15 text-center md:text-left ">
              I have completed my BCA [Bachlore of Computer Applicaton] from
              Rashtrasant Tukadoji Maharaj Nagpur University [RTMNU] in 2023-26
              Batch, where I developed a strong foundation in software
              development and problem-solving. With a keen interest in web
              development and Java programming, I have gained both academic
              knowledge and practical exposure through projects. I am an
              enthusiastic learner who adapts quickly to new technologies and
              strives for excellence in every task. I am now eager to begin my
              professional journey and contribute effectively to a dynamic
              organization.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start mt-4 md:mt-0 ">
            <div
              className={`relative overflow-hidden bg-white w-[320px] h-[380px]  /* base (mobile) size */ sm:w-[400px] sm:h-[450px] /* slightly larger phones */ md:w-[400px] md:h-[440px] /* laptop/desktop same as before */ rounded-4xl md:ml-30 ml-3 mt-8 md:${styles.shadow}`}
            >
              <img
                className="w-full h-full object-cover"
                src="./src/assets/edited 2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[100px] md:mt-[150px]">
          <SkillsGrid />
        </div>

        <h2 className="text-[24px] md:text-[38px] font-bold text-white tracking-wide mt-25 mb-8 text-center md:ml-5">
          Education
          <p className="text-[15px] md:text-[14px] font-[font8] font-light text-[#b3b3b3]">
            My Academic Journey
          </p>
        </h2>
        <div className="text-[15px] md:text-[20px] font-[font6] ml-3 mr-3 flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl w-100 h-50 p-2 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:border-blue-500/80 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]">
            <h2 className="text-[16px]  md:text-[20px] font-[font2] text-blue-500/80">
              Master of Computer Applications
            </h2>
            <p className="text-[15px]  md:text-[16px] font-[font8] mt-2">
              SIES College of Management Studies, Navi Mumbai
            </p>
            <p className="text-[15px] md:text-[15px] font-[font8] mt-2 text-[#b3b3b3]">
              2026-2028
            </p>
            <p className="text-[15px] md:text-[18px] font-[font8] mt-2">
              CGPA: 8.5/10
            </p>
          </div>
          <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl w-100 h-50 p-2 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:border-blue-500/80 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]">
            <h2 className="text-[16px] md:text-[19px] font-[font2] text-blue-500/80">
              Bachelor of Computer Applications
            </h2>
            <p className="text-[15px] md:text-[16px] font-[font8] mt-2">
              Shivaji Science College, Nagpur University, Nagpur
            </p>
            <p className="text-[15px] md:text-[15px] font-[font8] mt-2 text-[#b3b3b3]">
              2026-2028
            </p>
            <p className="text-[15px] md:text-[18px] font-[font8] mt-2">
              CGPA: 6.8/10
            </p>
          </div>
          <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl w-100 h-50 p-2 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:border-blue-500/80 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]">
            <h2 className="text-[20px] text-center md:text-[20px] font-[font2] text-blue-500/80">
              Higher Secondary School Education (HSC)
            </h2>
            <p className="text-[15px] md:text-[16px] font-[font8] mt-2">
              RDMP High School & Jr. College, Dondaicha, Maharashtra Board
            </p>
            <p className="text-[15px] md:text-[15px] font-[font8] mt-2 text-[#b3b3b3]">
              2026-2028
            </p>
            <p className="text-[15px] md:text-[18px] font-[font8] mt-2">
              Percentage: 76.00%
            </p>
          </div>
          <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl w-100 h-50 p-2 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:border-blue-500/80 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]">
            <h2 className="text-[20px] md:text-[20px] font-[font2] text-blue-500/80">
              Secondary School Education (SSC)
            </h2>
            <p className="text-[15px] md:text-[16px] font-[font8] mt-2">
              DadaSaheb Rawal High School, Dondaicha, Maharashtra Board
            </p>
            <p className="text-[15px] md:text-[15px] font-[font8] mt-2 text-[#b3b3b3]">
              2026-2028
            </p>
            <p className="text-[15px] md:text-[18px] font-[font8] mt-2">
              Percentage: 82.20%
            </p>
          </div>
        </div>

        {/* <div className="text-[15px] md:text-[20px] font-[font6] mt-25 ml-3 mr-3">
          <h2
            className={`text-[25px] md:text-[40px] font-[font5] mt-5 ml-5 mb-3 ${styles.flicker}`}
          >
            My Curriculum Activities
          </h2>
          <ul>
            <li>
              - Volunteered in technical and cultural events organized at [
              College-level].
            </li>
            <li>
              - Actively engaged in seminars and webinars on emerging
              technologies.
            </li>
            <li>
              - Organized and coordinated college-level events, showcasing
              leadership and teamwork skills.
            </li>
            <li>
              - Active participation in sports activities (e.g., cricket,
              football, athletics) promoting teamwork.
            </li>
            <li>
              - Assisted juniors and peers through peer-to-peer learning
              sessions.
            </li>
            <li>
              - Contributed as a volunteer in college fests, cultural programs,
              or NSS activities.
            </li>
            <li>
              - Participated in coding competitions and hackathons at
              [College/Platform Name]. <br /> Member of the
              [Tech/Programming/Robotics] Club, contributing to team projects
              and workshops.
            </li>
          </ul>
        </div> */}
        <div>
          <h2 className="text-[24px] md:text-[38px] font-bold text-white tracking-wide mt-25 mb-8 text-center md:ml-5">
            Certifications
          </h2>
          <ul className="text-[15px] md:text-[20px] font-[font6] mt-3 ml-3 mr-3">
            <li>
              - Completed "Full Stack Web Development with React" from
              ApnaCollege, covering front-end and back-end development.
            </li>

            <li>
              - Completed "JavaScript for Beginners" from Udemy, mastering the
              fundamentals of JavaScript programming.
            </li>
            <li>
              - Completed "AI/ML for Beginners" from ApnaCollege,gaining basics
              of AI and machine learning concepts.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Agence;
