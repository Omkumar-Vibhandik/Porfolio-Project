// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaJava,
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaNodeJs,
//   FaGitAlt,
//   FaBootstrap,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiExpress,
//   SiTailwindcss,
//   SiCplusplus,
//   SiMysql,
// } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

// const skills = [
//   { name: "Java", icon: FaJava, color: "#f89820" },
//   { name: "React", icon: FaReact, color: "#61dafb" },
//   { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e" },
//   { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
//   { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
//   { name: "Node.js", icon: FaNodeJs, color: "#339933" },
//   { name: "Express.js", icon: SiExpress, color: "#ffffff" },
//   { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
//   { name: "MySQL", icon: SiMysql, color: "#4479a1" },
//   { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
//   { name: "C++", icon: SiCplusplus, color: "#00599c" },
//   { name: "Git", icon: FaGitAlt, color: "#f05032" },
//   { name: "Bootstrap", icon: FaBootstrap, color: "#563d7c" },
//   { name: "VS Code", icon: VscVscode, color: "#007acc" },
//   { name: "GitHub", icon: FaGithub, color: "#181237" },
// ];

// export default function SkillsGrid() {
//   return (
//     <section className="py-16 px-4 max-w-6xl mx-auto">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-white tracking-wide">
//           Skills & Technologies
//         </h2>
//         <p className="text-gray-400 mt-2 text-sm">
//           Technologies and tools I use to craft full-stack software applications
//         </p>
//       </div>

//       {/* Grid Layout: Responsive 2-col on mobile, 4 to 6-col on larger screens */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {skills.map((skill) => {
//           const IconComponent = skill.icon;

//           return (
//             <motion.div
//               key={skill.name}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2, ease: "easeOut" }}
//               className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
//             >
//               {/* Subtle Dotted Matrix Grid Background Effect on Hover */}
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
//                 style={{
//                   backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
//                   backgroundSize: "10px 10px",
//                 }}
//               />

//               {/* Glowing Ambient Radial Glow */}
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 style={{
//                   background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
//                 }}
//               />

//               {/* Tech Logo Icon */}
//               <div className="relative z-10 text-3xl mb-3 text-gray-300 transition-colors duration-300 group-hover:text-white">
//                 <IconComponent style={{ color: skill.color }} />
//               </div>

//               {/* Skill Title */}
//               <span className="relative z-10 text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:text-white group-hover:font-semibold">
//                 {skill.name}
//               </span>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#563d7c" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "VS Code", icon: VscCode, color: "#007acc" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "GitHub", icon: FaGithub, color: "#24292e" },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          Skills & Tech Stack
        </h2>
        <p className="text-gray-400 font-[font8] text-sm mt-1">
          Technologies and tools I work with
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            {/* Minimal Side Category Label */}
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400 sm:w-32 shrink-0 border-l-2 border-blue-500 pl-2">
              {group.category}
            </span>

            {/* Compact Card Grid */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => {
                const IconComponent = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl w-32 h-23 p-2 flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:border-blue-500/80 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                  >
                    {/* Hover Dotted Matrix Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: "8px 8px",
                      }}
                    />

                    {/* Dynamic Ambient Color Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
                      }}
                    />

                    {/* Scaled-down Icon */}
                    <div className="relative z-10 text-xl mb-1 text-gray-300 transition-colors duration-300 group-hover:text-white">
                      <IconComponent style={{ color: skill.color }} />
                    </div>

                    {/* Compact Label */}
                    <span className="relative z-10 text-[10px] font-medium text-gray-400 text-center leading-tight transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
