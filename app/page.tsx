"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.ticker.lagSmoothing(0);

    // Animação da Hero sumindo no scroll
    gsap.to("#hero-content", {
      opacity: 0,
      y: -60,
      scrollTrigger: {
        trigger: "#content-container",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* HERO NORMAL */}
      <section id="hero-section" className="relative w-full z-0">
        <Hero />
      </section>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full">
        <div
          id="content-container"
          className="relative w-full bg-background/80 backdrop-blur-md rounded-t-[30px] md:rounded-t-[50px]"
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}