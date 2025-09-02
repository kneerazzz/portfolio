import Contact from "@/components/contact";
import Footer from "@/components/footer";
import GitHubStats from "@/components/githubContributions";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
    </div>
  );
}
