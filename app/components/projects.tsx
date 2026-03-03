"use client";

import { useInView } from "../hooks/useInView";
import { PROJECTS } from "@/app/data/projects";
import { ProjectCard } from "./ui/cards";
import { SectionHeader } from "./sectionHeader";

export default function Projects() {
  const ref = useInView();

  return (
    <section
      id="projects"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div ref={ref} className="container flex flex-col justify-center items-start gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main">
        <SectionHeader
          title="Projetos em destaque"
          number="3"
        />
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
    </section>
  );
}
