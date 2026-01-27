"use client";

import { useInView } from "../hooks/useInView";
import { PROJECTS } from "@/app/data/projects";
import { ProjectCard } from "./ui/cards";

export default function Projects() {
  const ref = useInView();

  return (
    <section
      id="projects"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div ref={ref} className="container flex flex-col justify-center items-start gap-8 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main">
        <header className="flex flex-col gap-6">
          <p className="text-sm md:text-md text-primary font-mono">
            {"//"} Meus projetos
          </p>
          <h1 className="text-3xl md:text-5xl text-foreground font-bold">
            Projetos em destaque
          </h1>
          <p className="text-md md:text-lg font-light max-w-150 text-foreground/70 flex flex-col gap-4 leading-relaxed">
            Uma seleção dos meus projetos mais recentes e relevantes que
            demonstram minhas habilidades técnicas e criativas.
          </p>
        </header>
        <section
          className="grid
          grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
          gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </div>

      <div className="absolute -z-10 inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[12%] w-2 h-2 bg-primary/40 rounded-full animate-pulse" />

        <div
          className="absolute top-[18%] right-[14%] w-1.5 h-1.5 bg-primary/35 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <div
          className="absolute bottom-[16%] left-[14%] w-3 h-3 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.1s" }}
        />

        <div
          className="absolute bottom-[12%] right-[12%] w-2 h-2 bg-primary/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.7s" }}
        />

        <div
          className="absolute top-[45%] left-[6%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "2.3s" }}
        />
      </div>
    </section>
  );
}
