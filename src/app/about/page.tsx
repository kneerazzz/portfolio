import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Troyy",
  description: "Learn more about Troyy — Developer • Delusional • Lifelong Learner",
  openGraph: {
    title: "About | Troyy",
    description: "Learn more about Troyy — Developer • Delusional • Lifelong Learner",
    url: "https://kneerazzz.vercel.app/about", // Replace with your actual domain if different
    images: [
      {
        url: "/me.png", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "About Troyy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Troyy",
    description: "Learn more about Troyy — Developer • Delusional • LIfelong Learner",
    images: ["/me.png"], // Ensure this image exists in your public folder
  },
};

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Neeraj • aka Troyy • Developer • Delusional • Lifelong Learner
        </p>
      </div>

      {/* Story */}
      <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-gray-100">Neeraj</span> (online I go
          by <span className="font-semibold text-gray-900 dark:text-gray-100">Troyy</span>). I&apos;m{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">18</span> and currently in my{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">2nd year of college</span>, where I
          spend most of my time building projects and exploring new tech.
        </p>
        <p>
          My coding journey started just a year ago when I got my first laptop.
          I began with C++ and DSA, but quickly discovered that{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">web development</span> was where I
          thrived. From small clones and API-based projects to larger
          applications, I&apos;ve been focused on learning by building.
        </p>
        <p>
          Some of my most impactful projects include a{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">YouTube-like backend</span> system,{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">SkillSprint</span> (a gamified learning
          platform powered by AI), and <span className="font-semibold text-gray-900 dark:text-gray-100">Vindex</span> (AI video search).
        </p>
      </div>

      {/* SkillSprint Context */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">SkillSprint</h2>
        <p>
          What started as a small idea — giving users a random 5-minute daily
          topic — grew into a full-fledged{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">learning platform</span>. With
          SkillSprint, users can create skills, build structured learning plans,
          and get AI-generated breakdowns and explanations. It tracks progress,
          introduces challenges, and makes self-learning more engaging.{" "}
          <a
            href="https://gradiva.vercel.app/about" // Update this link if necessary
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
          >
            View more
          </a>
          .
        </p>
      </div>

       {/* Vindex Context - ADDED */}
       <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Vindex</h2>
        <p>
          Recognizing the frustration of scrubbing through long videos, I built{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">Vindex</span>.
          It&#39;s an AI-powered tool that lets you search *inside* YouTube videos.
          Paste a URL, type your query, and Vindex pinpoints the exact timestamps
          where your topic is discussed using transcripts, embeddings, and vector search.{" "}
           <a
            href="https://vindex0.vercel.app" // Your Vindex demo link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
          >
            Try Vindex
          </a>
          .
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <li>JavaScript / TypeScript</li>
          <li>HTML / CSS</li>
          <li>C / C++</li>
          <li>React / Next.js</li>
          <li>TailwindCSS</li>
          <li>Express / Mongoose</li>
          <li>Node.js / Python</li> {/* Added Python */}
          <li>MongoDB / Vector Search</li> {/* Added Vector Search */}
          <li>Appwrite / Cloudinary</li>
          <li>Git / GitHub</li>
          <li>Linux (Arch)</li>
          <li>AI/ML (Transformers)</li> {/* Added AI/ML */}
        </ul>
      </div>

      {/* Projects */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Other Projects</h2>
        <ul className="list-disc list-inside space-y-2">
           <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Vindex</span> – AI-powered semantic search for YouTube videos.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Blog App</span> – A simple web app
            to publish and share thoughts.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Meme Platform (WIP)</span> – Uses
            Reddit API + Appwrite backend to generate and serve memes.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Video-sharing Backend</span> –
            Full-featured backend for video upload, update, deletion, and
            publishing with Express, Mongoose, and Cloudinary.
          </li>
        </ul>
      </div>

      {/* Personal Approach */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">My Approach</h2>
        <p>
          I&apos;m a hands-on builder who learns best by creating. I focus on{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">shipping projects quickly</span>,
          learning from mistakes, and iterating fast. Alongside web development,
          I&apos;m working on{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">DSA and AI/ML</span> to strengthen my
          fundamentals and explore new opportunities.
        </p>
      </div>

      {/* Back button */}
      <div className="pt-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-500 transition-colors dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
