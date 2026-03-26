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
    const lenis = new Lenis({ 
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5 
    });

    lenis.on("scroll", ScrollTrigger.update);
    const updateRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);

    const handleAnchorClick = (e: Event) => {
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (target?.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(target);
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(l => l.addEventListener("click", handleAnchorClick));

    //MatchMedia Radical
    const mm = gsap.matchMedia();

    // APENAS DESKTOP: Efeito de sobreposição e fade
    mm.add("(min-width: 768px)", () => {
      gsap.to("#hero-content", {
        y: 500,
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

    // MOBILE: Não adicionado animação de movimento no #hero-content.
    mm.add("(max-width: 767px)", () => {
      gsap.to("#hero-content", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#content-container",
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        }
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
      mm.revert();
      links.forEach(l => l.removeEventListener("click", handleAnchorClick));
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="w-full min-h-screen">
      <section
        id="hero-section"
        className="relative w-full min-h-dvh md:h-dvh flex items-center justify-center z-0"
      >
        <Hero />
      </section>

      <div className="relative z-10 w-full">
        <div
          id="content-container"
          className="relative w-full bg-background/80 md:backdrop-blur-md rounded-t-[30px] md:rounded-t-[50px]"
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