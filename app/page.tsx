import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-20 space-y-32">
      <HeroSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
