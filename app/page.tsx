"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const smoother = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Inicialização do Smoother
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    // Resolvendo bug das âncoras
    // Intercepta todos os links que começam com '#'
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link && link.hash && link.origin === window.location.origin) {
        e.preventDefault();
        // Usa o smoother para rolar até o elemento com suavidade
        smoother.current?.scrollTo(link.hash, true, "top top");
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Animação do Fade Out da Hero
    gsap.to("#hero-content", {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: "#content-container",
        start: "top 90%", 
        end: "top 20%",
        scrub: true,
      },
    });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (smoother.current) smoother.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full h-screen overflow-hidden">

      {/* HERO FIXA NO FUNDO */}
      <section id="hero-section" className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </section>

      {/* CONTEÚDO QUE SOBE */}
      <div id="smooth-content" className="relative z-10 w-full pointer-events-none">
        <div id="home" className="h-screen w-full bg-transparent" />
        <div
          id="content-container"
          className="relative w-full bg-background/80 backdrop-blur-md rounded-t-[30px] md:rounded-t-[50px] pointer-events-auto"
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