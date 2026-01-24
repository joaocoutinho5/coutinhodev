"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SKILLS, SkillCategory } from "../data/skills";
import { SkillItem } from "./ui/cards";

interface SkillsContentProps {
  activeTab: SkillCategory;
}

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};


export function SkillsContent({ activeTab }: SkillsContentProps) {
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4"
        >
          {SKILLS[activeTab].map((skill) => (
            <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
