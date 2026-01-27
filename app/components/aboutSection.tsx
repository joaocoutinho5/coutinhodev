"use client";
import { useInView } from "../hooks/useInView";

import { ProfileCard } from "./ui/cards";

export default function About() {
  const ref = useInView()

  return (
    <section
      id="about"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div ref={ref} className="container flex flex-col justify-center items-start gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main">
        <header className="flex flex-col gap-6">
          <p className="text-sm md:text-md text-primary font-mono">
            {"//"} Sobre mim
          </p>
          <h1 className="text-3xl md:text-5xl text-foreground font-bold">
            Quem sou eu
          </h1>
        </header>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <section className="text-md md:text-lg font-light w-full md:max-w-120 text-foreground/70 flex flex-col gap-4 leading-relaxed">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia que recentemente
              encontrou na programação um espaço para crescer e se desafiar
              constantemente. Ao longo da minha jornada, venho explorando
              diferentes tecnologias do desenvolvimento web, atuando tanto na
              construção de interfaces quanto na lógica por trás das aplicações.
            </p>
            <p>
              Gosto de trabalhar em soluções completas, unindo organização,
              criatividade e atenção aos detalhes para entregar aplicações
              funcionais, intuitivas e bem estruturadas.
            </p>
            <p>
              Busco constantemente novos desafios que me permitam aplicar meu
              conhecimento em soluções práticas e eficientes, sempre prezando
              por código limpo, boas práticas e projetos que realmente façam a
              diferença.
            </p>
          </section>
          {/* Card Perfil */}
          <ProfileCard />
        </div>
      </div>

      {/* Background decoration - geometric grid pattern */}
      <div className="absolute -z-10 inset-0 pointer-events-none overflow-hidden">
        {/* Animated floating orbs */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/35 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
}
