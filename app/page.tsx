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
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    // 3. LOGICA DO SCROLL TO (Links Âncora)
    const handleAnchorClick = (e: Event) => {
  const targetElement = e.currentTarget as HTMLAnchorElement;
  const target = targetElement.getAttribute("href");

  if (target && target.startsWith("#")) {
    e.preventDefault();
    lenis.scrollTo(target, {
      offset: 0,
      immediate: false,
      duration: 1.5,
    });
  }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    gsap.to("#hero-content", {
      y: 500,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#content-container",
        start: "top 100%",
        end: "top 30%",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      <section
        id="hero-section"
        className="relative w-full h-dvh overflow-hidden z-0"
      >
        <Hero />
      </section>
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
