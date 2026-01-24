"use client";

import { motion } from "framer-motion";

type SkillTab = "frontend" | "backend" | "tools";

const tabs: SkillTab[] = ["frontend", "backend", "tools"];

interface SkillsTabsProps {
  activeTab: SkillTab;
  onChange: (tab: SkillTab) => void;
}

export function SkillsTabs({ activeTab, onChange }: SkillsTabsProps) {
  return (
    <div className="relative w-full md:max-w-100 flex justify-between overflow-visible border border-border/50 rounded-full px-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab as SkillTab)}
            className="relative z-10 px-3 md:px-4 py-1.5 md:py-2 text-[14px] font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="activeTab"
                className="absolute bg-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100%+10px)] w-[calc(100%+28px)] md:w-[calc(100%+35px)] -z-10 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}

            <span className={isActive ? "text-foreground" : ""}>
              {tab === "frontend"
                ? "Front-end"
                : tab === "backend"
                ? "Back-end"
                : "Ferramentas"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
