"use client";

import { useState, useEffect } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAppwrite,
  SiGithub,
  SiCloudinary,
  SiTypescript,
  SiGooglegemini,
} from "react-icons/si";
import { BiCloud, BiLinkExternal } from "react-icons/bi";
import { HiAcademicCap, HiPencilAlt, HiPlay } from "react-icons/hi";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "SkillSprint",
      description:
        "A robust full-stack EdTech platform. It dynamically generates daily learning topics, tracks user progress, and gamifies skill development with interactive challenges and personalized learning paths. Real-time updates and responsive UI ensure a smooth experience across devices.",
      icon: <HiAcademicCap className="w-6 h-6" />,
      imageUrl: "/images/skillsprint.png",
      demoUrl: "https://chulbul.vercel.app",
      githubUrl: "#",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="w-5 h-5" /> },
        { name: "Ai", icon: <SiGooglegemini className="w-5 h-5" /> }
      ],
      category: "Full-Stack",
      featured: true,
    },
    {
      title: "Troy Blog App",
      description:
        "A blog app I built for sharing ideas. Clean, responsive, and easy to write/read posts.",
      icon: <HiPencilAlt className="w-6 h-6" />,
      imageUrl: "/images/troyblog.png",
      demoUrl: "https://troyy.netlify.app/",
      githubUrl: "#",
      technologies: [
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
      ],
      category: "Frontend",
      featured: true,
    },
    {
      title: "YouTube Backend Clone",
      description:
        "Full-featured YouTube backend: video uploads, auth, playlists, and subscriptions. Focused on core functionality without front-end distractions.",
      icon: <HiPlay className="w-6 h-6" />,
      imageUrl: "/images/youtube-backend.png",
      demoUrl: null,
      githubUrl: "https://github.com/kneerazzz/Backend/tree/main/whossshhh",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
        { name: "Cloudinary", icon: <BiCloud className="w-5 h-5" /> },
      ],
      category: "Backend",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`text-2xl md:text-3xl font-bold text-start mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-zinc-800 rounded-xl p-6 border border-gray-700 transition-all duration-500 hover:border-gray-600 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <BiLinkExternal className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      title="View Code"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-y-2 gap-x-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-1.5 bg-gray-700 rounded-lg px-3 py-1.5 border border-gray-600 group-hover:border-gray-500 transition-all duration-250"
                    >
                      <div className="text-white">{tech.icon}</div>
                      <span className="text-xs font-medium text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/kneerazzz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-zinc-700 text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-zinc-600 transition-all duration-300 group"
          >
            <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">View More Projects</span>
            <BiLinkExternal className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
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

export default ProjectsSection;
