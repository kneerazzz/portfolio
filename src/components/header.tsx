"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Github, Linkedin, X } from "lucide-react";
import { IconPuzzle, IconRocket, IconArticle } from "@tabler/icons-react";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", icon: <Home size={18} />, label: "Home" },
    { href: "#skills", icon: <IconPuzzle size={18} />, label: "Skills" },
    { href: "#projects", icon: <IconRocket size={18} />, label: "Projects" },
    { href: "/about", icon: <User size={18} />, label: "About" },
  ];

  const socialLinks = [
    { href: "https://github.com/kneerazzz", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://x.com/xllyod", icon: <X size={18} />, label: "Twitter" },
    { href: "https://linkedin.com/in/kneerazzz", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "/", icon: <IconArticle size={18} />, label: "Blogs" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="rounded-full w-[850px] max-lg:w-[700px] max-sm:w-[350px] px-2 py-[7px] bg-white/10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center shadow">
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Nav links */}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`relative group px-1 rounded-full transition-all duration-300 hover:px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                  pathname === link.href
                    ? "text-yellow-500"
                    : "text-black dark:text-white"
                }`}
              >
                {link.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-black/80 dark:bg-white/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {link.label}
                </span>
              </div>
            </Link>
          ))}

          {/* Divider (hidden on small screens) */}
          <span className="hidden sm:block w-[2px] h-6 bg-gray-400 mx-2"></span>

          {/* Social links (hidden on small screens) */}
          <div className="hidden sm:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group px-1 hover:px-3 rounded-full transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white">
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-black/80 dark:bg-white/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    {social.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
