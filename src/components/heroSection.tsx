"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center pt-40 pb-17 px-4 sm:px-6 text-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Profile Image */}
      <div className={`relative w-40 h-40 mb-2 rounded-full overflow-hidden border-4 border-gray-600 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-500 opacity-0 hover:opacity-20 transition-opacity duration-300 z-10"></div>
        <Image
          src="/me.png"
          alt="Neeraj profile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-white to-gray-500 rounded-full"></div>
      </div>

      {/* Name */}
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Neeraj</span>
      </h1>

      {/* Description */}
      <div className="text-center">
        <p className="mt-1 text-lg font-medium text-gray-600 max-w-2xl mx-auto">
            I&apos;m a full-stack developer who enjoys building clean, scalable apps.  
            Right now, I&apos;m shifting my focus to AI 
            because I want to dive into creating and experimenting with AI models —  
            not just apps that use them.
        </p>
        <a 
            href="/about" 
            className="inline-block mt-6 text-gray-500 hover:underline"
        >
            Read more →
        </a>
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
}