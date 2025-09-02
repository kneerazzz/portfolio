"use client";

import { useState, useEffect } from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAppwrite,
  SiGithub,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiData, BiCloud } from "react-icons/bi";
import { VscSymbolKeyword } from "react-icons/vsc";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4" /> },
        { name: "CSS", icon: <SiCss3 className="w-4 h-4" /> },
        { name: "C", icon: <SiC className="w-4 h-4" /> },
        { name: "C++", icon: <SiCplusplus className="w-4 h-4" /> },
        { name: "Python", icon: <SiPython className="w-4 h-4" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <SiReact className="w-4 h-4" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-4 h-4" /> },
        { name: "Shadcn/UI", icon: <VscSymbolKeyword className="w-4 h-4" /> },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
        { name: "Appwrite", icon: <SiAppwrite className="w-4 h-4" /> },
        { name: "Cloudinary", icon: <BiCloud className="w-4 h-4" /> },
      ],
    },
    {
      title: "Dev Tools",
      skills: [
        { name: "Git/GitHub", icon: <SiGithub className="w-4 h-4" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4" /> },
        { name: "Linux", icon: <SiLinux className="w-4 h-4" /> },
      ],
    },
    {
      title: "AI / ML (Exploring)",
      skills: [
        { name: "Python basics", icon: <SiPython className="w-4 h-4" /> },
        { name: "AI model development", icon: <BiData className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements matching hero section */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className={`text-2xl md:text-3xl font-bold text-start mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">Skills</span>
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`transition-all duration-700 delay-${categoryIndex * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-lg font-medium mb-4 from-white to-gray-500 text-transparent bg-clip-text bg-gradient-to-r border-b border-gray-100 pb-2">
                {category.title}
              </h3>
              <div className="grid cursor-pointer grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-zinc-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-xs border border-gray-600 transition-all duration-250 hover:shadow-sm hover:border-gray-800 hover:-translate-y-0.5"
                  >
                    <div className="text-white mb-1.5">{skill.icon}</div>
                    <span className="text-xs font-medium text-white text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;