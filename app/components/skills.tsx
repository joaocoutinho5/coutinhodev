"use client";

import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./sectionHeader";
import { SkillsTabs } from "./skill-tabs";
import { SkillsContent } from "./skill-content";
import { useState } from "react";

type SkillTab = "frontend" | "backend" | "tools";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("frontend");
  const ref = useInView();
  return (
    <section
      id="skills"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div
        ref={ref}
        className="container flex flex-col justify-center items-start gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main"
      >
        <SectionHeader title="Minhas habilidades" number="2" />
        <section className="w-full min-h-128 md:min-h-72 flex flex-col gap-10">
          {/* tabs */}
          <SkillsTabs activeTab={activeTab} onChange={setActiveTab} />
          {/* conteúdo */}
          <SkillsContent activeTab={activeTab} />
        </section>
        <div className="w-full flex flex-col md:flex-row justify-between gap-6"></div>
      </div>
    </section>
  );
}
