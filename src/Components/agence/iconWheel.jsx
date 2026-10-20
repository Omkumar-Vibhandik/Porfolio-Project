import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://react.dev",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    link: "https://www.python.org",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    link: "https://angular.io",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    link: "https://www.docker.com",
  },
];

export default function SkillArc() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 250; // half circle size
  const centerX = 0;
  const centerY = 0;

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-12">
        ⚡ Stack & Skills
      </h2>

      <motion.div
        className="relative w-[600px] h-[300px]"
        style={{ perspective: "1000px" }}
        animate={{ rotate: scrollY * 0.05 }} // moves with scroll
        transition={{ type: "spring", stiffness: 40 }}
      >
        {skills.map((skill, i) => {
          const angle = (i / (skills.length - 1)) * Math.PI; // distribute on half circle
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <motion.a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center"
              style={{
                left: `${x + 250}px`, // adjust center
                top: `${y}px`,
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
