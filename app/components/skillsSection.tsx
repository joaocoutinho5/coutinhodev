"use client";

import { useInView } from "../hooks/useInView";

import { SkillsTabs } from "./skill-tabs";
import { SkillsContent } from "./skill-content";
import { useState } from "react";

type SkillTab = "frontend" | "backend" | "tools";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("frontend");
  const ref = useInView()
  return (
    <section
      id="skills"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div ref={ref} className="container flex flex-col justify-center items-start gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main">
        <header className="flex flex-col gap-6">
          <p className="text-sm md:text-md text-primary font-mono">
            {"//"} Skills e tecnologias
          </p>
          <h1 className="text-3xl md:text-5xl text-foreground font-bold">
            Minhas habilidades
          </h1>
          <p className="text-md md:text-lg font-light max-w-150 text-foreground/70 flex flex-col gap-4 leading-relaxed">
            Tecnologias e ferramentas que utilizo para transformar ideias em
            produtos digitais de alta qualidade.
          </p>
        </header>

        <section className="w-full min-h-128 md:min-h-72 flex flex-col gap-10">
          {/* tabs */}
          <SkillsTabs activeTab={activeTab} onChange={setActiveTab} />
          {/* conteúdo */}
          <SkillsContent activeTab={activeTab} />
        </section>
        <div className="w-full flex flex-col md:flex-row justify-between gap-6"></div>
      </div>

      {/* Background decoration*/}
      <div className="absolute -z-10 inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Corner accent lines */}
          <div className="absolute top-2 right-2 md:top-8 md:right-8 w-16 h-16 border-r-2 border-t-2 border-primary/10 rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 md:bottom-8 md:left-8 w-16 h-16 border-l-2 border-b-2 border-primary/10 rounded-bl-lg" />
        </div>

        <div className="absolute top-[12%] left-[8%] w-2 h-2 bg-primary/35 rounded-full animate-pulse" />

        <div
          className="absolute top-[15%] right-[15%] w-3 h-3 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.6s" }}
        />

        <div
          className="absolute bottom-[20%] left-[18%] w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />

        <div
          className="absolute bottom-[14%] right-[8%] w-2 h-2 bg-primary/35 rounded-full animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
        <div
          className="absolute top-[28%] right-[40%] w-1 h-1 bg-primary/35 rounded-full animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
      </div>
    </section>
  );
}
