"use client";

import { FiCoffee } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiX, SiGmail, SiDiscord } from "react-icons/si";

export default function Footer() {
  const contactLinks = [
    { name: "GitHub", url: "https://github.com/kneerazzz", icon: <SiGithub className="w-6 h-6" /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/neeraj", icon: <SiLinkedin className="w-6 h-6" /> },
    { name: "Twitter", url: "https://twitter.com/neeraj", icon: <SiX className="w-6` h-6" /> },
  ];

  return (
    <footer className="text-gray-200 pb-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-semibold text-2xl mb-6">Let's connect</h3>
        <div className="flex justify-center space-x-4 mb-6 gap-2">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-3">
            <p>CAFFEINATE ME</p>
            <FiCoffee href="https://buymeacoffee.com" className="transition-transform hover:scale-110 cursor-pointer w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}
