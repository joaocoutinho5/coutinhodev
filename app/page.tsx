import Hero from "./components/heroSection";
import About from "./components/aboutSection";
import Skills from "./components/skillsSection";
import Projects from "./components/projectsSection";
import Contact from "./components/contactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
