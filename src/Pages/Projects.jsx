import React from "react";
import Projectsimage from "../Components/projects/projectsimage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../Components/Comman/Footer.jsx";
import styles from "../Pages/Project.module.css";

const Projects = () => {
  const projects = [
    {
      image1: {
        text: "Voyager Loop",
        src: "./src/assets/VoyagerLoop.png",
        link: "https://voyagerloop.onrender.com/listings",
        description:
          "A travel platform for discovering destinations and exploring stays.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
      },
      image2: {
        text: "Iron Man",
        src: "./src/assets/ironman.jpg",
        link: "https://voyagerloop.onrender.com/listings",
        description:
          "A project showcasing a futuristic, Iron Man-inspired interface.",
        tech: ["React", "CSS", "JavaScript"],
      },
    },
    {
      image1: {
        text: "Batman",
        src: "./src/assets/batman.jpg",
        link: "https://voyagerloop.onrender.com/listings",
        description: "A dark-themed interface inspired by Batman.",
        tech: ["React", "Tailwind CSS"],
      },
      image2: {
        text: "Spider Man",
        src: "./src/assets/spider.jpg",
        link: "https://voyagerloop.onrender.com/listings",
        description: "A superhero-themed project with a dynamic visual design.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.7,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="p-5 pt-0 mb-[70vh] ">
        <h2
          className={`font-[font2] text-[55px] md:text-[8vw] text-center m-4 uppercase md:mb-20 mb-12 mt-12${styles.aboutBold}`}
        >
          Projects
          <div className={`${styles.aboutLine}`}></div>
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap items-start mt-0 -md:mt-5 gap-4 md:gap-8 md:mb-29">
          <div className="w-85 md:w-[400px] md:h-[400px] h-65 mt-10 md:mt-0 md:ml-[120px] md:mr-[70px] ml-5">
            <video
              loop
              muted
              autoPlay
              className="w-full h-full object-cover rounded-lg"
              src="./src/assets/Codingman.webm"
            ></video>
          </div>
          <div className="text-[18px] md:text-[22px] font-[font8] w-full md:w-[45%] md:ml-10 mt-10 md:mt-10">
            <p className="text-[#b3b3b3]">
              During my academic and professional journey, I have worked on
              multiple projects as a full-stack developer, focusing on creating
              responsive and user-friendly frontend applications along with
              efficient backend systems. My experience includes API integration,
              database management, and delivering end-to-end solutions. I am
              also familiar with AI tools and can effectively use them to
              enhance development workflows and project outcomes. Some of the
              projects I have worked on include [Project Name 1], [Project Name
              2], and [Project Name 3].Where I applied modern technologies and
              best practices to achieve reliable and scalable outcomes.
            </p>
          </div>
        </div>

        <div className="-mt-8 lol">
          {projects.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="hero w-full mb-10 flex flex-col md:flex-row gap-6 md:h-[600px]"
              >
                <Projectsimage project1={elem.image1} project2={elem.image2} />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;

//
