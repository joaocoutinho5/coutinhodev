import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPostgresql,
  SiIcloud,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export type SkillCategory = "frontend" | "backend" | "tools";

export interface SkillItemProps {
  name: string;
  icon: React.ElementType;
}

export const SKILLS: Record<SkillCategory, SkillItemProps[]> = {
  frontend: [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "REST APIs", icon: SiIcloud },
  ],
  tools: [
    { name: "VSCode", icon: VscVscode },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Docker", icon: SiDocker },
  ],
};
