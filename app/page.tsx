"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  useEffect(() => {
    // Detecta se é mobile
    const isMobile = window.innerWidth < 768;
    let lenis: Lenis | null = null;
    let mm: gsap.MatchMedia | null = null;

    // Inicializa Lenis e GSAP APENAS no Desktop
    if (!isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenis.on("scroll", ScrollTrigger.update);
      const updateRaf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(updateRaf);
      gsap.ticker.lagSmoothing(0);
      gsap.registerPlugin(ScrollTrigger);

      mm = gsap.matchMedia();

      // Animação original APENAS para Desktop
      mm.add("(min-width: 768px)", () => {
        gsap.to("#hero-content", {
          y: 250,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#content-container",
            start: "top 100%",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    }

    // Controle de links âncora
    const handleAnchorClick = (e: Event) => {
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href",
      );
      if (target?.startsWith("#")) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target);
        } else {
          // Fallback nativo para o mobile
          document
            .querySelector(target)
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((l) => l.addEventListener("click", handleAnchorClick));

    return () => {
      if (lenis) {
        lenis.destroy();
        gsap.ticker.remove((time: number) => lenis?.raf(time * 1000));
      }
      if (mm) mm.revert();
      links.forEach((l) => l.removeEventListener("click", handleAnchorClick));
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-transparent">
      <section
        id="hero-section"
        className="relative w-full h-screen md:h-screen flex items-center justify-center z-0"
      >
        <Hero />
      </section>

      <div className="relative z-10 w-full mt-0">
        <div
          id="content-container"
          className="relative w-full bg-background/80 backdrop-blur-md rounded-t-[30px] md:rounded-t-[50px] overflow-hidden"
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
