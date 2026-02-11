"use client";
import { useInView } from "../hooks/useInView";

import { ProfileCard } from "./ui/cards";

export default function About() {
  const ref = useInView();

  return (
    <section
      id="about"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div
        ref={ref}
        className="container flex flex-col justify-center items-start gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main"
      >
        <header className="flex flex-col gap-6">
          <p className="text-sm md:text-md text-primary font-mono">
            {"//"} Sobre mim
          </p>
          <h1 className="text-3xl md:text-5xl text-foreground/90 font-bold">
            Quem sou eu
          </h1>
        </header>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <section className="text-md md:text-lg font-light w-full md:max-w-120 text-foreground/65 flex flex-col gap-4 leading-relaxed">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas pela PUC
              Minas, atualmente em transição de carreira para a área de
              tecnologia. Resido em Ribeirão Preto – SP e venho direcionando
              meus estudos e projetos para o desenvolvimento de aplicações web,
              com foco em soluções funcionais, organizadas e bem estruturadas.
            </p>
            <p>
              Tenho interesse especial em desenvolvimento fullstack, com maior
              foco no frontend moderno, sem deixar de aprofundar conhecimentos
              em backend e banco de dados. Ao longo da minha formação, venho
              construindo projetos práticos que me permitem evoluir tanto na
              parte técnica quanto na organização do código e na experiência do
              usuário.
            </p>
            <p>
              Busco desenvolver aplicações que aliem clareza, eficiência e boas
              práticas de desenvolvimento. Mais detalhes sobre as tecnologias e
              ferramentas que utilizo estão disponíveis na seção{" "}
              <a href="#skills" className="font-bold">
                Skills
              </a>
              .
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
