"use client";

import { useInView } from "../hooks/useInView";
import { BtnCurriculo } from "./ui/buttons";

export default function Hero() {
  const subtitleRef = useInView()
  const titleRef = useInView()
  const descRef = useInView()
  const subDescRef = useInView()
  const btnRef = useInView()

  return (
    <section id="start" className="relative z-10 w-full flex justify-center">
      <div className="container min-h-screen flex flex-col gap-10 justify-center mx-2 md:mx-0">
        <header className="flex flex-col gap-6">
            <p ref={subtitleRef} className="text-sm md:text-md text-primary font-mono fade-down">
              {"//"} Ola, eu sou
            </p>
            <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold fade-down delay-1">
              João Pedro Coutinho
              <span className="text-primary">.</span>
            </h1>

          <h2 ref={descRef} className="text-2xl md:text-4xl text-foreground/65 font-semibold fade-down delay-2">
            Full-Stack Developer
          </h2>
          <p ref={subDescRef} className="text-md md:text-lg font-light text-foreground/65 max-w-150 fade-down delay-3">
            Desenvolvedor web em constante aprendizado, criando soluções
            eficientes com tecnologias modernas e boas práticas.
          </p>
        </header>
        
        {/* <div ref={btnRef} className="fade-down delay-4">
          <BtnCurriculo />
          </div> */}
        

        {/* Background decoration*/}
        
      </div>
      <div className="absolute -z-10 inset-0 pointer-events-none overflow-hidden">
          {/* Diagonal accent lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 -left-20 w-100 h-px bg-linear-to-r from-transparent via-primary/20 md:via-primary/40 to-transparent rotate-45" />
            <div className="absolute top-40 -left-10 w-75 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent rotate-45" />
            <div className="absolute bottom-32 -right-20 w-87.5 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent -rotate-45" />
          </div>

          {/* Corner brackets */}
          <div className="absolute top-2 left-2 md:top-8 md:left-8 w-16 h-16 border-l-2 border-t-2 border-primary/10 rounded-tl-lg" />
          <div className="absolute bottom-2 right-2 md:bottom-8 md:right-8 w-16 h-16 border-r-2 border-b-2 border-primary/10 rounded-br-lg" />

          {/* Floating dots */}
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/35 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
      </div>
    </section>
  );
}
